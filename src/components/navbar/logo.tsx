import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
	className?: string;
}

export const Logo = ({ className }: Props) => {
	return (
		<div>
			<Link href="/" className="flex items-center">
				<Image
					src="/landscape.jpg"
					alt="Hayat Logo"
					width={50}
					height={50}
					className="mr-3"
				/>
				<h1
					className={`${className}font-bold text-white text-2xl self-center whitespace-nowrap`}
				>
					Hayat
				</h1>
			</Link>
		</div>
	);
};
