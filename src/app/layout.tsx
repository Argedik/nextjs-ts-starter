import { Inter } from 'next/font/google';
import './globals.scss';
import React from 'react';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer/Footer';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Blog',
	description: 'Next.js starter app',
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
