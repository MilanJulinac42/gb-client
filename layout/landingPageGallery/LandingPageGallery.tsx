import React from "react";
import styles from "./LandingPageGallery.module.scss";
import Card from "../../components/card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const LandingPageGallery: React.FC = () => {
  const products = [
    { name: "Product 1", price: 19.99, imageUrl: "/gb1.jpg" },
    { name: "Product 2", price: 24.99, imageUrl: "/gb1.jpg" },
    { name: "Product 3", price: 34.99, imageUrl: "/gb1.jpg" },
    { name: "Product 4", price: 54.99, imageUrl: "/gb1.jpg" },
    { name: "Product 5", price: 64.99, imageUrl: "/gb1.jpg" },
  ];

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "40px",
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className={styles.sliderWrapper}>
      {isSmallScreen ? (
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index}>
              <Card {...product} />
            </div>
          ))}
        </Slider>
      ) : (
        <div className={styles.wrapper}>
          <p className={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            tempora fuga corrupti ullam odio eos dolorem ducimus at eligendi!
            Earum consectetur corrupti doloribus repudiandae, ex quae eos sit?
            Delectus minima facilis harum repellat nulla dolores illo reiciendis
            nihil cumque, amet laudantium et unde beatae enim excepturi ut iusto
            voluptates placeat.
          </p>
          <div className={styles.gallery}>
            {products.map((product, index) => (
              <Card key={index} {...product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPageGallery;
