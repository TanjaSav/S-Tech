'use client';

import { productsDummyData, userDummyData } from '@/assets/assets';
import type { AppContextType, CartItems, Product, UserData } from '@/types';
import { useRouter } from 'next/navigation';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
  throw new Error('useAppContext must be used within AppContextProvider');
}

  return context;
};

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const currency = process.env.NEXT_PUBLIC_CURRENCY;
  const router = useRouter();

  const [products, setProducts] = useState<Product[]>([]);
  const [userData, setUserData] = useState<UserData | false>(false);
  const [isSeller, setIsSeller] = useState(true);
  const [cartItems, setCartItems] = useState<CartItems>({});

  const fetchProductData = async () => {
    setProducts(productsDummyData as Product[]);
  };

  const fetchUserData = async () => {
    setUserData(userDummyData as UserData);
  };

  const addToCart = async (itemId: string) => {
    const cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
  };

  const updateCartQuantity = async (itemId: string, quantity: number) => {
    const cartData = structuredClone(cartItems);

    if (quantity === 0) {
      delete cartData[itemId];
    } else {
      cartData[itemId] = quantity;
    }

    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;

    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        totalCount += cartItems[itemId];
      }
    }

    return totalCount;
  };

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product._id === itemId);

      if (itemInfo && cartItems[itemId] > 0) {
        totalAmount += itemInfo.offerPrice * cartItems[itemId];
      }
    }

    return Math.floor(totalAmount * 100) / 100;
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    fetchUserData();
  }, []);

  const value: AppContextType = {
    currency,
    router,
    isSeller,
    setIsSeller,
    userData,
    fetchUserData,
    products,
    fetchProductData,
    cartItems,
    setCartItems,
    addToCart,
    updateCartQuantity,
    getCartCount,
    getCartAmount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
