import type { NextPage } from "next";
import Head from "next/head";
import Header from "../layout/header/Header";
import Container from "../components/container/Container";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Regalo</title>
				<meta
					name="description"
					content="Your description about the gift basket e-commerce app"
				/>

				<link rel="icon" href="/favicon.png" />
			</Head>

			<Header></Header>
			<main>
				<Container>
					<p>random</p>
				</Container>
			</main>
		</div>
	);
};

export default Home;
