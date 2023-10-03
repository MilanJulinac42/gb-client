import React from "react";
import styles from "./HomePageCategoriesSection.module.scss";
import ProductCard from "../../components/productCard/ProductCard";

const HomePageCategoriesSection: React.FC = () => {
  const products = [
    { name: "Birthday category", amountOfItems: 5, imageUrl: "/gb1.jpg" },
    { name: "Gourmet category", amountOfItems: 3, imageUrl: "/gb1.jpg" },
    { name: "Coorporative category", amountOfItems: 7, imageUrl: "/gb1.jpg" },
    { name: "Lovers category", amountOfItems: 2, imageUrl: "/gb1.jpg" },
    { name: "Random category", amountOfItems: 11, imageUrl: "/gb1.jpg" },
  ];
  return (
    <div className={styles.wrapper}>
      <h1>Shop by category</h1>
      <p>Check some of our categories</p>
      <div className={styles.gallery}>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default HomePageCategoriesSection;
