'use client';

import { useState, useEffect, useRef } from 'react';
import NavbarContent from './titles';
import { Logo } from './logo';
import { motion, useCycle } from 'framer-motion';
import { HamburgerMenu } from './hamburgerMenu';
import { useDimensions } from '@/utils/use-dimensions';

const Navbar = () => {
	const containerRef = useRef(null);
	const { height } = useDimensions(containerRef);
	const [isOpen, toggleOpen] = useCycle(false, true);
	const [scrollSettings, setScrollSettings] = useState(
		'bg-transparent shadow-none'
	);

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 90) {
				setScrollSettings('bg-white shadow-lg');
			} else {
				setScrollSettings('bg-transparent shadow-none');
			}
		};
		window.addEventListener('scroll', changeColor);
	}, []);
	return (
		<header className="relative">
			<motion.nav
				initial={false}
				custom={height}
				animate={isOpen ? 'open' : 'closed'}
				className={`${scrollSettings} fixed left-0 top-0 w-full z-10 ease-in duration-300`}
			>
				<div className="max-w-screen-xl flex flex-wrap m-auto justify-between items-center p-4">
					<Logo />
					<HamburgerMenu
						onClick={() => {
							toggleOpen();
						}}
					/>
					<div
						className={`${
							isOpen ? 'block' : 'hidden'
						} w-full sm:block md:w-auto`}
						id="navbar-dropdown"
					>
						<NavbarContent desktop isOpen={isOpen} />
						<NavbarContent isOpen={isOpen} />
					</div>
				</div>
			</motion.nav>
		</header>
	);
};

export default Navbar;
