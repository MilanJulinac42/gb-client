// Sorting.tsx
import React, { useState } from "react";
import styles from "./Sorting.module.scss";

const Sorting: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(
    "Sort by Price: High to Low"
  );

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
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
            <div
              onClick={() => handleOptionChange("Sort by Price: Low to High")}
            >
              Price: Low to High
            </div>
            <div
              onClick={() => handleOptionChange("Sort by Price: High to Low")}
            >
              Price: High to Low
            </div>
            <div onClick={() => handleOptionChange("Sort by Name: (A-Z)")}>
              Name: (A-Z)
            </div>
            <div onClick={() => handleOptionChange("Sort by Name: (Z-A)")}>
              Name: (Z-A)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sorting;
