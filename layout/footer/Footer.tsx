import React from "react";
import styles from "./Footer.module.scss";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.contact}>
          <h4>Contact us</h4>
          <p>Email: gbbaskets@gmail.com</p>
          <p>Phone: +381 63-8384-196</p>
          <p>Address: Kralja Petra I, Backa Palanka, Srbija</p>
        </div>

        <div className={styles.links}>
          <h4>Quick Links</h4>
          <p>Shop</p>
          <p>Home</p>
          <p>About us</p>
          <p>Contact us</p>
          <p>Blog</p>
        </div>
      </div>
      <div className={styles.social}>
        <h4>Folow us:</h4>

        <FontAwesomeIcon
          className={styles.icon}
          icon={faLinkedin}
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          className={styles.icon}
          icon={faInstagram}
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          className={styles.icon}
          icon={faFacebook}
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          className={styles.icon}
          icon={faTiktok}
        ></FontAwesomeIcon>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2023 Regalo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
