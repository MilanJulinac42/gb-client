import React, { useEffect } from "react";
import styles from "./LandingPageGallery.module.scss";
import Card from "../../components/card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const LandingPageGallery: React.FC<{ giftBasketsGallery: any }> = ({
  giftBasketsGallery,
}) => {
  const products = giftBasketsGallery;
  useEffect(() => {
    console.log(products)
  }, [])

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
          {products.map((product: any, index: any) => (
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
            {products.map((product: any, index: any) => (
              <Card key={index} {...product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPageGallery;
