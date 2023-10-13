import React from "react";
import styles from "./Hero.module.scss";

const Hero: React.FC<{ heroTitle: string }> = ({ heroTitle }) => {
  return (
    <div className={styles.wrapperT}>
      <div className={styles.contentWrapper}>
        <p>regalo</p>
        <h1 className={styles.h1T}>{heroTitle}</h1>
        <button className={styles.ctaT}>SHOP NOW</button>
        <div className={styles.scroll}></div>
      </div>
    </div>
  );
};

export default Hero;
