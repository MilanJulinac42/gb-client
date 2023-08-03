import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
	return (
		<div className="logo">
			<Image src="/logo.png" width={50} height={50} alt="Logo" />
		</div>
	);
};

export default Logo;
