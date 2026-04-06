import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { AppContextProvider } from '@/context/AppContext';
import { Toaster } from 'react-hot-toast';
import type { ReactNode } from 'react';

const outfit = Outfit({ subsets: ['latin'], weight: ['300', '400', '500'] });

export const metadata: Metadata = {
  title: 'S-Tech',
  description: 'E-commerce S-Techstore',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased text-gray-700`}>
        <Toaster />
        <AppContextProvider>{children}</AppContextProvider>
      </body>
    </html>
  );
}
