import React from "react";
import Image from "next/image";
import styles from "./Logo.module.scss";

const Logo: React.FC = () => {
	return (
		<div>
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
