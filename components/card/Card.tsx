import React from "react";
import styles from "./Card.module.scss";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

interface ProductCardProps {
  name: string;
  price: number;
  imageUrl: string;
}

const Card: React.FC<ProductCardProps> = ({ name, price, imageUrl }) => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.items}></div>
        <div className={classNames(styles.items, styles.head)}>
          <p>Flower Embroidery Hoop Art</p>
          <hr />
        </div>
        <div className={classNames(styles.items, styles.price)}>
          <p className={styles.old}>$699</p>
          <p className={styles.new}>$345</p>
        </div>
        <div className={classNames(styles.items, styles.cart)}>
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
          <span>ADD TO CART</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
