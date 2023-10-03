import React from "react";
import Image from "next/image";
import styles from "./Card.module.scss";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

const Card: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imgBx}>
          <Image src={imageUrl} alt="random" width={300} height={300} />
        </div>

        <div className={styles.contentBx}>
          <h2>Nike Shoes</h2>

          <div className={styles.size}>
            <h3>Price :</h3>
            <span>{price}</span>
          </div>

          <a href="#">Buy Now</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
