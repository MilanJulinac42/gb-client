import React from "react";
import Image from "next/image";
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
    // <div className={styles.container}>
    //   <Image src={imageUrl} alt="random" width={300} height={300}/>
    //   <div className={styles.overlay}>
    //     <div className={styles.items}></div>
    //     <div className={classNames(styles.items, styles.head)}>
    //       <p>{name}</p>
    //       <hr />
    //     </div>
    //     <div className={classNames(styles.items, styles.price)}>
    //       <p className={styles.new}>{price}$</p>
    //     </div>
    //     <div className={classNames(styles.items, styles.cart)}>
    //       <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
    //       <span>ADD TO CART</span>
    //     </div>
    //   </div>
    // </div>
    // ### ALT ###
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
