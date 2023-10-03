import React from "react";
import styles from "./ProductCard.module.scss";
import Image from "next/image";
import classNames from "classnames";

interface ProductCardProps {
    name: string;
    amountOfItems: number;
    imageUrl: string;
  }

const ProductCard: React.FC<ProductCardProps> = ({ name, amountOfItems, imageUrl }) => {
  return (
    <div className={styles.container}>
      <Image src={imageUrl} alt="random" width={300} height={300} />
      <div className={styles.overlay}>
        <div className={styles.items}></div>
        <div className={classNames(styles.items, styles.head)}>
          <p>{name}</p>
          <hr />
        </div>
        <div className={classNames(styles.items, styles.price)}>
          <p className={styles.new}>Amount: {amountOfItems}</p>
        </div>
        <div className={classNames(styles.items, styles.cart)}>
          <span>EXPLORE MORE</span>
        </div>
      </div>
    </div>
  );
};


export default ProductCard;