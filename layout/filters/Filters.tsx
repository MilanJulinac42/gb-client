import React from "react";
import BasketTypeFilter from "../../components/basketTypeFilter/BasketTypeFilter";
import PriceFilter from "../../components/priceFilter/PriceFilter";
import styles from "./Filters.module.scss";
import BasketCategoryFilter from "../../components/basketCategoryFilter/BasketCategoryFilter";

const Filters: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Filters</h2>
      <div className={styles.filtersWrapper}>
        <PriceFilter />
        <BasketTypeFilter />
        <BasketCategoryFilter />
      </div>
    </div>
  );
};

export default Filters;
