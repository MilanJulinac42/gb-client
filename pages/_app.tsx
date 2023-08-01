import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Karla, Zilla_Slab } from "@next/font/google";

const karla = Karla({
	subsets: ["latin"],
	weight: ["400", "700"],
});

const zilla = Zilla_Slab({
	subsets: ["latin"],
	weight: ["400", "700"],
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={zilla.className}>
			{" "}
			<Component {...pageProps} />;
		</main>
	);
}

export default MyApp;
