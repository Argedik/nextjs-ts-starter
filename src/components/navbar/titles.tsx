'use client';

import React, { useEffect, useState } from 'react';
import { headerData } from './data';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Props {
	desktop?: boolean;
	isOpen?: boolean;
}

const variantsList = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const variantsItem = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const NavbarContent = ({ desktop = false, isOpen = false }: Props) => {
	const [textColor, setTextColor] = useState(
		'text-black md:text-white text-lg'
	);

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setTextColor('text-black');
			} else {
				setTextColor('text-white');
			}
		};
		window.addEventListener('scroll', changeColor);
	}, []);

	return desktop ? (
		<motion.ul
			variants={variantsList}
			className="hidden md:flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 list-none"
		>
			{headerData.map((item, index) => (
				<li className={`${textColor} p-2`} key={index}>
					<motion.div whileHover={{ scale: 1.1 }}>
						<Link href={`${item.url}`}>{item.title}</Link>
					</motion.div>
				</li>
			))}
		</motion.ul>
	) : (
		<motion.ul
			className={`md:hidden ${
				isOpen ? 'block' : 'hidden'
			} flex-col font-medium p-4 md:p-0 mt-4 border-solid border border-sky-300 bg-sky-600 rounded-lg list-none text-2xl sm:hiddenbg-gray-50`}
			variants={variantsList}
		>
			{headerData.map((item, index) => (
				<motion.li
					className={`${textColor} p-4`}
					key={index}
					variants={variantsItem}
				>
					<motion.div whileHover={{ scale: 1.1 }}>
						<Link href={`${item.url}`}>{item.title}</Link>
					</motion.div>
				</motion.li>
			))}
		</motion.ul>
	);
};

export default NavbarContent;
