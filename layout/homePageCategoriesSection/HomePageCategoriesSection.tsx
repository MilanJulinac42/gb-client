import React from "react";
import styles from "./HomePageCategoriesSection.module.scss";
import ProductCard from "../../components/productCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const HomePageCategoriesSection: React.FC = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const products = [
    { name: "Birthday category", amountOfItems: 5, imageUrl: "/gb1.jpg" },
    { name: "Gourmet category", amountOfItems: 3, imageUrl: "/gb1.jpg" },
    { name: "Coorporative category", amountOfItems: 7, imageUrl: "/gb1.jpg" },
    { name: "Lovers category", amountOfItems: 2, imageUrl: "/gb1.jpg" },
    { name: "Random category", amountOfItems: 11, imageUrl: "/gb1.jpg" },
  ];

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
            <div key={index} className={styles.sliderItem}>
              <ProductCard {...product} />
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
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePageCategoriesSection;
