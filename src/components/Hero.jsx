// src/components/Hero.js

import React from 'react';

// Accept props like title, subtitle, and imageUrl
const Hero = ({title, subtitle, imageUrl}) => {
	return (
		<div
			className="hero min-h-[50vh] bg-cover bg-center" // Reduced height for example
			style={{backgroundImage: `url(${imageUrl})`}}
		>
			<div className="hero-overlay bg-black bg-opacity-50"></div>
			<div className="hero-content text-center text-neutral-content">
				<div className="max-w-md">
					{/* Use the props to display the content */}
					<h1 className="mb-5 text-8xl font-light whitespace-nowrap font-style italic">{title}</h1>
					<p className="mb-5">{subtitle}</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
