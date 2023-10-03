import type { NextPage } from "next";
import Head from "next/head";
import Container from "../components/container/Container";
import Navbar from "../layout/navbar/Navbar";
import Hero from "../layout/hero/Hero";
import LandingPageGallery from "../layout/landingPageGallery/LandingPageGallery";
import Benefits from "../layout/benefits/Benefits";
import HomePageCategoriesSection from "../layout/homePageCategoriesSection/HomePageCategoriesSection";
import Shipping from "../layout/shipping/Shipping";

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
        <Container color="#fff2cc" heading="Pogledajte neke od nasih proizvoda">
          <LandingPageGallery />
        </Container>
        <Container color="#b2d8d8" heading="Benefits and stuff and other stuff">
          <Benefits></Benefits>
        </Container>
        <Container color="#fff2cc" heading="Shop by category">
          <HomePageCategoriesSection></HomePageCategoriesSection>
        </Container>
        <Container color="#b2d8d8" heading="Shipping & Payment">
          <Shipping></Shipping>
        </Container>
      </main>
    </div>
  );
};

export default Home;
