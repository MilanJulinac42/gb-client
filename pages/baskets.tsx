import React from "react";
import styles from "./baskets/Baskets.module.scss";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import ProductHeading from "../components/productHeading/ProductHeading";
import SearchBar from "../components/searchBar/SearchBar";
import Filters from "../layout/filters/Filters";
import Sorting from "../components/sorting/Sorting";
import BasketCardList from "../layout/basketCardList/BasketCardList";

const Baskets: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <ProductHeading></ProductHeading>
        <div className={styles.wrapper}>
          <div className={styles.filtersWrapper}>
            <Filters />
          </div>
          <div className={styles.test}>
            <div className={styles.test2}>
              <SearchBar />
              <Sorting />
            </div>
            <BasketCardList />
          </div>
        </div>
        <div className={styles.listAndFiltersWrapper}></div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Baskets;
