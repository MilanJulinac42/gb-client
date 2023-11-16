import React from "react";
import styles from "./baskets/Baskets.module.scss";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import ProductHeading from "../components/productHeading/ProductHeading";
import SearchBar from "../components/searchBar/SearchBar";
import Filters from "../layout/filters/Filters";
import Sorting from "../components/sorting/Sorting";

const Baskets: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <ProductHeading></ProductHeading>
        <div className={styles.sortAndSearchWrapper}>
          <Filters />
          <SearchBar></SearchBar>
          <Sorting />
        </div>
        <div className={styles.listAndFiltersWrapper}>{/* baskets list */}</div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Baskets;
