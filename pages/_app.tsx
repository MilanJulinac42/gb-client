import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Karla, Zilla_Slab } from "next/font/google";

export const karla = Karla({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-karla",
});

export const zilla = Zilla_Slab({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-zilla",
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<main className={karla.className}>
				{" "}
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
