import React, { ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
	children: ReactNode;
	color?: string;
}

const Container: React.FC<ContainerProps> = ({ children, color }) => {
	return (
		<div className={styles.pageContainer} style={{ backgroundColor: color }}>
			<div className={styles.contentContainer}>{children}</div>
		</div>
	);
};

export default Container;
