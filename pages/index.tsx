import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/container/Container";
import Navbar from "../layout/navbar/Navbar";
import Hero from "../layout/hero/Hero";

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

			<Navbar></Navbar>
			<main>
				<Container>
					<Hero></Hero>
				</Container>
			</main>
		</div>
	);
};

export default Home;
