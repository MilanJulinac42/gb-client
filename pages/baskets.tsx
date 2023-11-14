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
      <div className={styles.wrapper}>
        <ProductHeading></ProductHeading>
        <SearchBar></SearchBar>
        <Filters />
        {/* sorting */}
        {/* baskets list */}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Baskets;
