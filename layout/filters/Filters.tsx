import { useEffect, useRef } from "react";
import styles from "./Filters.module.scss";
import PriceFilter from "../../components/priceFilter/PriceFilter";

const Filters: React.FC = () => {
  return (
    <div>
      <PriceFilter />
    </div>
  );
};

export default Filters;
