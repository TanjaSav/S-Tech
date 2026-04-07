import type { Dispatch, SetStateAction } from 'react';
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export type Product = {
  _id: string;
  userId?: string;
  name: string;
  description: string;
  price: number;
  offerPrice: number;
  image: string[];
  category: string;
  date?: number;
  __v?: number;
};

export type Address = {
  fullName: string;
  phoneNumber: string;
  street: string;
  city: string;
  state: string;
  zipcode?: string | number;
};

export type OrderItem = {
  product: Product;
  quantity: number;
};

export type Order = {
  _id?: string;
  address: Address;
  items: OrderItem[];
  amount: number;
  date: number;
};

export type UserData = {
  name?: string;
  email?: string;
  imageUrl?: string;
  cartItems?: Record<string, number>;
  [key: string]: unknown;
};

export type CartItems = Record<string, number>;

export type AppContextType = {
  currency: string | undefined;
  router: AppRouterInstance;
  isSeller: boolean;
  setIsSeller: Dispatch<SetStateAction<boolean>>;
  userData: UserData | false;
  fetchUserData: () => Promise<void>;
  products: Product[];
  fetchProductData: () => Promise<void>;
  cartItems: CartItems;
  setCartItems: Dispatch<SetStateAction<CartItems>>;
  addToCart: (itemId: string) => Promise<void>;
  updateCartQuantity: (itemId: string, quantity: number) => Promise<void>;
  getCartCount: () => number;
  getCartAmount: () => number;
};