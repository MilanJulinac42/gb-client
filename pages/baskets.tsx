import React from "react";
import styles from "./baskets/Baskets.module.scss";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import ProductHeading from "../components/productHeading/ProductHeading";

const Baskets: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.wrapper}>
        <ProductHeading></ProductHeading>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Baskets;
