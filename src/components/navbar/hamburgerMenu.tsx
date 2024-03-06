import React from 'react';
import { motion, SVGMotionProps, Transition } from 'framer-motion';
interface Props {
	onClick: () => void;
}

interface PathProps extends SVGMotionProps<SVGPathElement> {
	variants?: {
		closed: { d: string; opacity?: number };
		open: { d: string; opacity?: number };
	};
	transition?: Transition;
	d?: string;
}

const Path = ({ variants, transition, d, ...props }: PathProps) => {
	return (
		<motion.path
			d={d}
			variants={variants}
			transition={transition}
			fill="transparent"
			strokeWidth="3"
			stroke="white"
			strokeLinecap="round"
			{...props}
		/>
	);
};

export const HamburgerMenu: React.FC<Props> = ({ onClick }) => {
	return (
		<button onClick={() => onClick()} className="block md:hidden z-10">
			<svg width="23" height="23" viewBox="0 0 23 23" fill="#fff">
				<Path
					variants={{
						//d: Specifies the shape of the path element, M: x and y coordinate where the line starts, L: x and y coordinate where the line ends
						closed: { d: 'M 2 2.5 L 20 2.5' },
						open: { d: 'M 3 16.5 L 17 2.5' },
					}}
				/>
				<Path
					variants={{
						closed: { d: 'M 2 9.423 L 20 9.423', opacity: 1 },
						open: { d: 'M 2 9.423 L 20 9.423', opacity: 0 },
					}}
					transition={{ duration: 0.1 }}
				/>
				<Path
					variants={{
						closed: { d: 'M 2 16.346 L 20 16.346' },
						open: { d: 'M 3 2.5 L 17 16.346' },
					}}
				/>
			</svg>
		</button>
	);
};
