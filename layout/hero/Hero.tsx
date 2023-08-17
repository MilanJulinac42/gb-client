import React from "react";
import styles from "./Hero.module.scss";
import HeroImage from "../../components/heroImage/HeroImage";

const Hero: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<h1 className={styles.heading}>Cinimo trenutke posebnim</h1>
			<div className={styles.imageWrapper}>
				<HeroImage src="/gb1.jpg"></HeroImage>
				<HeroImage src="/gb2.jpeg"></HeroImage>
				<HeroImage src="/gb3.jpeg"></HeroImage>
			</div>
		</div>
	);
};

export default Hero;
