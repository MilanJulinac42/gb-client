import React from "react";
import BasketTypeFilter from "../../components/basketTypeFilter/BasketTypeFilter";
import PriceFilter from "../../components/priceFilter/PriceFilter";
import styles from "./Filters.module.scss";

const Filters: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Filters</h2>
      <PriceFilter />
      <BasketTypeFilter />
    </div>
  );
};

export default Filters;
