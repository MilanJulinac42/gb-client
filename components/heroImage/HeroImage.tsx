import Image from "next/image";
import React from "react";

interface HeroImageProps {
	src: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src }) => {
	return (
		<div>
			<Image src={src} width={600} height={800} alt="Logo" />
		</div>
	);
};

export default HeroImage;
