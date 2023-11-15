// CheckboxFilter.tsx
import React, { useState } from "react";
import styles from "./BasketTypeFilter.module.scss";
import CustomCheckbox from "../checkbox/Checkbox";

const basketTypes = ["Family", "Fruit", "Vegetable", "Picnic"];

const BasketTypeFilter: React.FC = () => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleCheckboxChange = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <div className={styles.container}>
      <h4>Basket Type</h4>
      <div className={styles.checkboxList}>
        {basketTypes.map((type) => (
          <CustomCheckbox
            key={type}
            label={type}
            isChecked={selectedTypes.includes(type)}
            onChange={() => handleCheckboxChange(type)}
          />
        ))}
      </div>
    </div>
  );
};

export default BasketTypeFilter;
