import React, { ReactNode } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  color?: string;
  heading?: string;
}

const Container: React.FC<ContainerProps> = ({ children, color, heading }) => {
  return (
    <div className={styles.pageContainer} style={{ backgroundColor: color }}>
      {heading && (
        <div className={styles.heading}>
          <span></span>
          <h3>{heading}</h3>
          <span></span>
        </div>
      )}
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
};

export default Container;
