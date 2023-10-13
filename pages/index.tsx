import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Container from "../components/container/Container";
import Navbar from "../layout/navbar/Navbar";
import Hero from "../layout/hero/Hero";
import LandingPageGallery from "../layout/landingPageGallery/LandingPageGallery";
import Benefits from "../layout/benefits/Benefits";
import HomePageCategoriesSection from "../layout/homePageCategoriesSection/HomePageCategoriesSection";
import Shipping from "../layout/shipping/Shipping";
import Footer from "../layout/footer/Footer";
import axios from "axios";

interface HomeProps {
  settingsData: Settings;
}

interface Settings {
  heroTitle: string;
  giftBasketsGallery: Basket[];
}

export interface Basket  {
  _id: string;
  imageUrl: string;
  name: string;
  type: string;
  price: number;
};

const Home: NextPage<HomeProps> = ({ settingsData }) => {
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
          <Hero heroTitle={settingsData.heroTitle}></Hero>
        </Container>
        <Container color="#fff2cc" heading="Pogledajte neke od nasih proizvoda">
          <LandingPageGallery giftBasketsGallery={settingsData.giftBasketsGallery} />
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
      <Footer></Footer>
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const response = await axios.get('http://localhost:9090/settings/find');
    const settingsData = response.data.settings;

    return {
      props: {
        settingsData,
      },
      revalidate: false,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        settingsData: null,
      },
      revalidate: false,
    };
  }
};


export default Home;
