// Sorting.tsx
import React, { useState } from "react";
import styles from "./Sorting.module.scss";
import useWindowSize from "../../hooks/useWindowSize";
import classNames from "classnames";
import { faClose, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RadioButton from "../radioButton/RadioButton";

export type SortingOption = {
  label: string;
  value: string;
};

const Sorting: React.FC = () => {
  const { isMobile } = useWindowSize();
  const [showModal, setShowModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    "Sort by Price: High to Low"
  );

  const openModal = () => {
    setShowModal(true);
    document.body.classList.add(styles.noScroll);
  };

  const closeModal = () => {
    setShowModal(false);
    document.body.classList.remove(styles.noScroll);
  };

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <>
      {isMobile ? (
        <>
          <button className={styles.modalButton} onClick={() => openModal()}>
            <span>Sorting</span>{" "}
            <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
          </button>
          {showModal && (
            <div
              className={classNames(styles.modal, { [styles.open]: showModal })}
            >
              <div className={styles.modalContainer}>
                <div className={styles.modalWrapper}>
                  <button className={styles.closeButton} onClick={closeModal}>
                    <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
                  </button>
                  <h2 className={styles.modalHeading}>Sorting</h2>
                  <RadioButton
                    option={{
                      label: "Price: Low to High",
                      value: "Sort by Price: Low to High",
                    }}
                    selectedOption={selectedOption}
                    handleOptionChange={handleOptionChange}
                  />

                  <RadioButton
                    option={{
                      label: "Price: High to Low",
                      value: "Sort by Price: High to Low",
                    }}
                    selectedOption={selectedOption}
                    handleOptionChange={handleOptionChange}
                  />
                  <RadioButton
                    option={{
                      label: "Name: (A-Z)",
                      value: "Sort by Name: (A-Z)",
                    }}
                    selectedOption={selectedOption}
                    handleOptionChange={handleOptionChange}
                  />
                  <RadioButton
                    option={{
                      label: "Name: (Z-A)",
                      value: "Sort by Name: (Z-A)",
                    }}
                    selectedOption={selectedOption}
                    handleOptionChange={handleOptionChange}
                  />
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className={styles.container}>
          <div className={styles.sortBy}>
            <div className={`${styles.wrapper} ${styles.dropdown}`}>
              <div
                className={styles.selectedOption}
                onClick={() => handleOptionChange(selectedOption)}
              >
                {selectedOption}
              </div>
              <div className={styles.options}>
                <RadioButton
                  option={{
                    label: "Price: Low to High",
                    value: "Sort by Price: Low to High",
                  }}
                  selectedOption={selectedOption}
                  handleOptionChange={handleOptionChange}
                />

                <RadioButton
                  option={{
                    label: "Price: High to Low",
                    value: "Sort by Price: High to Low",
                  }}
                  selectedOption={selectedOption}
                  handleOptionChange={handleOptionChange}
                />
                <RadioButton
                  option={{
                    label: "Name: (A-Z)",
                    value: "Sort by Name: (A-Z)",
                  }}
                  selectedOption={selectedOption}
                  handleOptionChange={handleOptionChange}
                />
                <RadioButton
                  option={{
                    label: "Name: (Z-A)",
                    value: "Sort by Name: (Z-A)",
                  }}
                  selectedOption={selectedOption}
                  handleOptionChange={handleOptionChange}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sorting;
