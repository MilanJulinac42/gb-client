import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/container/Container";
import Navbar from "../layout/navbar/Navbar";
import Hero from "../layout/hero/Hero";
import LandingPageGallery from "../layout/landingPageGallery/LandingPageGallery";
import Benefits from "../layout/benefits/Benefits";
import HomePageCategoriesSection from "../layout/homePageCategoriesSection/HomePageCategoriesSection";

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
				<Container color="#364f6b">
					<Hero></Hero>
				</Container>
				<Container color="#fff2cc">
					<LandingPageGallery />
				</Container>
				<Container color="#b2d8d8">
					<Benefits></Benefits>
				</Container>
				<Container color="#fff2cc">
					<HomePageCategoriesSection></HomePageCategoriesSection>
				</Container>
			</main>
		</div>
	);
};

export default Home;
