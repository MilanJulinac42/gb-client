import React from "react";
import BasketCard from "../../components/basketCard/BasketCard";
import styles from "./BasketCardList.module.scss";

const BasketCardList: React.FC = () => {
  return (
    <div className={styles.container}>
      <BasketCard />
      <BasketCard />
      <BasketCard />
      <BasketCard />
      <BasketCard />
      <BasketCard />
      <BasketCard />
      <BasketCard />
      <BasketCard />
      <BasketCard />
      <BasketCard />
      <BasketCard />
      <BasketCard />
    </div>
  );
};

export default BasketCardList;
