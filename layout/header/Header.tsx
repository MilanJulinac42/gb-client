import Link from "next/link";
import Logo from "../../components/logo/Logo";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<Logo></Logo>
			<nav className={styles.header__navigation}>
				<ul>
					<li>
						<Link href={"/"}>Home</Link>
					</li>
					<li>
						<Link href={"/products"}>Products</Link>
					</li>
					<li>
						<Link href={"/about"}>About</Link>
					</li>
					<li>
						<Link href={"/testimonials"}>Testimonials</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.header__auth}>
				<Link href={"/login"}>Login</Link>
				<Link href={"/register"}>Register</Link>
			</div>
		</header>
	);
};

export default Header;
