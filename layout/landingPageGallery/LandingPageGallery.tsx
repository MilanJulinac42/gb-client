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
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {products.map((product, index) => (
        <Card key={index} {...product} />
      ))}
    </div>
  );
};

export default LandingPageGallery;
