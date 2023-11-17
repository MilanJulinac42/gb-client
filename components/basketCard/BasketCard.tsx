import React from "react";
import Image from "next/image";
import styles from "./BasketCard.module.scss";
import Link from "next/link";

const karta = { name: "Lovers basket", basketType: "Lovers", price: 3200 };

const BasketCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        width={290}
        height={320}
        src={"/gb1.jpg"}
        alt="test"
        className={styles.image}
      />
      <div className={styles.infoWrapper}>
        <span className={styles.type}>{karta.basketType}</span>
        <span className={styles.name}>{karta.name}</span>
        <Link href={"#"} className={styles.price}>
          View {karta.price}$
        </Link>
      </div>
    </div>
  );
};

export default BasketCard;
