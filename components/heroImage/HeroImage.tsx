import Image from "next/image";
import React from "react";
import styles from "./HeroImage.module.scss";

interface HeroImageProps {
	src: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src }) => {
	return (
		<div className={styles.imageContainer}>
			<Image
				src={src}
				alt="Image"
				layout="fill"
				className={styles.image}
			/>
		</div>
	);
};

export default HeroImage;
