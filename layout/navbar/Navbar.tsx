import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../components/logo/Logo";
import { Squash as Hamburger } from "hamburger-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const debounce = (func: () => void, delay: number) => {
    let debounceTimer: NodeJS.Timeout;
    return function () {
      const context = this;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context), delay);
    };
  };

  useEffect(() => {
    document.body.classList.toggle(styles.showMenu, navbar);
  }, [navbar]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const position = window.scrollY;
      setScrollPosition(position);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${
        scrollPosition > 300 ? styles.scrolled : ""
      }`}
    >
      <div className={styles.logoContainerSmall}>
        <div className={styles.test}>
          <span>
            <Logo></Logo>
          </span>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className={`${styles.authNav} ${styles.small}`}>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        </div>
      </div>
      <div className={`${styles.menuNav} ${isOpen ? styles.showMenu : ""}`}>
        <div className={styles.logoContainerLarge}>
          <Logo></Logo>
        </div>
        <ul>
          <li className={styles.c1}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.c2}>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className={styles.c3}>
            <Link href="/about">About Us</Link>
          </li>
          <li className={styles.c4}>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className={`${styles.authNav} ${styles.large}`}>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        </div>
      </div>
      <div
        className={`${styles.backdrop} ${navbar ? styles.showBackdrop : ""}`}
        onClick={() => setNavbar(false)}
      ></div>
    </nav>
  );
}
