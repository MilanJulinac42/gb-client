import React from "react";
import styles from "./Hero.module.scss";
import HeroImage from "../../components/heroImage/HeroImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleDown,
  faAngleDown,
  faChevronDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Hero: React.FC = () => {
  return (
    // <div className={styles.wrapper}>
    // 	<h1 className={styles.heading}>Cinimo trenutke posebnim</h1>
    // 	<button className={styles.cta}>SHOP NOW</button>
    // 	<div className={styles.imageWrapper}>
    // 		<HeroImage src="/gb1.jpg" />
    // 		<HeroImage src="/gb2.jpeg" />
    // 		<HeroImage src="/gb3.jpeg" />
    // 	</div>
    // </div>
    <div className={styles.wrapperT}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.h1T}>Cinimo trenutke posebnim</h1>
        <button className={styles.ctaT}>SHOP NOW</button>
        <div className={styles.scroll}></div>
      </div>
    </div>
  );
};

export default Hero;
