import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children } : RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}