import React from "react";
import styles from "./baskets/Baskets.module.scss";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import ProductHeading from "../components/productHeading/ProductHeading";
import SearchBar from "../components/searchBar/SearchBar";
import Filters from "../layout/filters/Filters";

const Baskets: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container}>
        <ProductHeading></ProductHeading>
        <div className={styles.sortAndSearchWrapper}>
          <SearchBar></SearchBar>
          {/* sorting */}
        </div>
        <div className={styles.listAndFiltersWrapper}>
          <Filters />
          {/* baskets list */}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Baskets;
