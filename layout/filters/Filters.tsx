import { useEffect, useRef } from "react";
import styles from "./Filters.module.scss";
import PriceFilter from "../../components/priceFilter/PriceFilter";
import CheckboxFilter from "../../components/checkboxFilter/CheckboxFilter";

const Filters: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2>Filters</h2>
      <PriceFilter />
      <CheckboxFilter />
    </div>
  );
};

export default Filters;
