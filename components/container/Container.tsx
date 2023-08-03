import React, { ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
	children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return (
		<div className={styles.pageContainer}>
			<div className={styles.contentContainer}>{children}</div>
		</div>
	);
};

export default Container;
