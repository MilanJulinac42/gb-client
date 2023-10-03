import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

export const roboto = Roboto({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-roboto",
})

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<main className={roboto.className}>
				{" "}
				<Component {...pageProps} />
			</main>
		</>
	);
}

export default MyApp;
