import React from "react";
import styles from "./Footer.module.scss";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

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
          <Link href="/shop">Shop</Link>
          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>
          <Link href="/contact">Contact us</Link>
          <Link href="/blog">Blog</Link>
        </div>
      </div>
      <div className={styles.social}>
        <h4>Follow us:</h4>
        <Link
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
        </Link>
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.icon} icon={faInstagram} />
        </Link>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.icon} icon={faFacebook} />
        </Link>
        <Link
          href="https://www.tiktok.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={styles.icon} icon={faTiktok} />
        </Link>
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2023 Regalo. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
