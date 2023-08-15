import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../components/logo/Logo";
import { Squash as Hamburger } from "hamburger-react";

export default function Navbar() {
	const [navbar, setNavbar] = useState(false);
	const [isOpen, setOpen] = useState(false);

	useEffect(() => {
		document.body.classList.toggle(styles.showMenu, navbar);
	}, [navbar]);

	return (
		<nav className={styles.navbar}>
			<div className={styles.logoContainerSmall}>
				<span>
					<Logo></Logo>
				</span>
				<Hamburger toggled={isOpen} toggle={setOpen} />
			</div>
			<div className={styles.logoContainerLarge}>
				<Logo></Logo>
			</div>
			<ul
				className={`${styles.menuNav} ${isOpen ? styles.showMenu : ""}`}
			>
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
			<div
				className={`${styles.backdrop} ${
					navbar ? styles.showBackdrop : ""
				}`}
				onClick={() => setNavbar(false)}
			></div>
		</nav>
	);
}
