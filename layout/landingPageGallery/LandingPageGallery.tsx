import React from "react";
import styles from "./LandingPageGallery.module.scss";
import Card from "../../components/card/Card";

const LandingPageGallery: React.FC = () => {
  const products = [
    { name: "Product 1", price: 19.99, imageUrl: "/gb1.jpg" },
    { name: "Product 2", price: 24.99, imageUrl: "/gb1.jpg" },
    { name: "Product 3", price: 34.99, imageUrl: "/gb1.jpg" },
    { name: "Product 4", price: 54.99, imageUrl: "/gb1.jpg" },
    { name: "Product 5", price: 64.99, imageUrl: "/gb1.jpg" },
  ];
  return (
    <div className={styles.wrapper}>
      <h1>Pogledajte neke od nasih proizvoda</h1>
      <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi tempora fuga corrupti ullam odio eos dolorem ducimus at eligendi! Earum consectetur corrupti doloribus repudiandae, ex quae eos sit? Delectus minima facilis harum repellat nulla dolores illo reiciendis nihil cumque, amet laudantium et unde beatae enim excepturi ut iusto voluptates placeat.</p>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {products.map((product, index) => (
          <Card key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default LandingPageGallery;
