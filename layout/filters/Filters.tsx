import React, { useState } from "react";
import BasketTypeFilter from "../../components/basketTypeFilter/BasketTypeFilter";
import PriceFilter from "../../components/priceFilter/PriceFilter";
import BasketCategoryFilter from "../../components/basketCategoryFilter/BasketCategoryFilter";
import styles from "./Filters.module.scss";
import useWindowSize from "../../hooks/useWindowSize";

const Filters: React.FC = () => {
  const { isMobile } = useWindowSize();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {isMobile ? (
        <>
          <button className={styles.modalButton} onClick={() => openModal()}>
            Filters
          </button>
          {showModal && (
            <div className={styles.modal}>
              <button className={styles.closeButton} onClick={closeModal}>
                X
              </button>
              <div className={styles.modalContainer}>
                <h2 className={styles.modalHeading}>Filters</h2>
                <div className={styles.modalFiltersWrapper}>
                  <div className={styles.border}>
                    <PriceFilter />
                  </div>
                  <div className={styles.border}>
                    <BasketTypeFilter />
                  </div>
                  <div className={styles.border}>
                    <BasketCategoryFilter />
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className={styles.container}>
          <h2 className={styles.heading}>Filters</h2>
          <div className={styles.filtersWrapper}>
            <PriceFilter />
            <BasketTypeFilter />
            <BasketCategoryFilter />
          </div>
        </div>
      )}
    </>
  );
};

export default Filters;
