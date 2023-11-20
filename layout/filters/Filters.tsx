import React, { useState } from "react";
import BasketTypeFilter from "../../components/basketTypeFilter/BasketTypeFilter";
import PriceFilter from "../../components/priceFilter/PriceFilter";
import BasketCategoryFilter from "../../components/basketCategoryFilter/BasketCategoryFilter";
import classNames from "classnames";
import useWindowSize from "../../hooks/useWindowSize";
import { faChevronDown, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Filters.module.scss";

const Filters: React.FC = () => {
  const { isMobile } = useWindowSize();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add(styles.noScroll);
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove(styles.noScroll);
  };

  return (
    <>
      {isMobile ? (
        <>
          <button className={styles.modalButton} onClick={() => openModal()}>
            <span>Filters</span>{" "}
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
          </button>
          {showModal && (
            <div
              className={classNames(styles.modal, { [styles.open]: showModal })}
            >
              <button className={styles.closeButton} onClick={closeModal}>
                <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
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
              <div className={styles.buttons}>
                <button className={classNames(styles.button, styles.apply)}>
                  APPLY
                </button>
                <button className={classNames(styles.button, styles.cancel)}>
                  CANCEL
                </button>
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
