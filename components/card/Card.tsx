import React from "react";
import styles from "./Card.module.scss";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

const Card: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt={name} className={styles.productImage} />
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{name}</h3>
        <p className={styles.productPrice}>${price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Card;
