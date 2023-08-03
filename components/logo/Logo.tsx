import React from "react";
import Image from "next/image";
import styles from "./Logo.module.scss";

const Logo: React.FC = () => {
	return (
		<div>
			{/* <Image
				className={styles.banner}
				width={800}
				height={300}
				src="/banner.png"
				alt="Logo"
			/> */}
			<Image
				className={styles.logo}
				src="/logo.png"
				width={50}
				height={50}
				alt="Logo"
			/>
		</div>
	);
};

export default Logo;
