import React from "react";
import styles from "./CheckboxFilter.module.scss";

const CheckboxFilter: React.FC = () => {
  return (
    <div className={styles.container}>
      <h4>Basket Type</h4>
      <div className={styles.checkboxList}>
        <div className={styles.checkboxWrapper}>
          <label>
            <input type="checkbox" value={"Tin"} />
            Tin
          </label>
        </div>
        <div className={styles.checkboxWrapper}>
          <label>
            <input type="checkbox" value={"Round"} />
            Round
          </label>
        </div>
        <div className={styles.checkboxWrapper}>
          <label>
            <input type="checkbox" value={"Spurce"} />
            Spurce
          </label>
        </div>
        <div className={styles.checkboxWrapper}>
          <label>
            <input type="checkbox" value={"Classic"} />
            Classic
          </label>
        </div>
      </div>
    </div>
  );
};

export default CheckboxFilter;
