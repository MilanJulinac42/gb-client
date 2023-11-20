import React from "react";
import { SortingOption } from "../sorting/Sorting";
import styles from "./RadioButton.module.scss";

type RadioButtonProps = {
  option: SortingOption;
  selectedOption: string;
  handleOptionChange: (value: string) => void;
};

const RadioButton: React.FC<RadioButtonProps> = ({
  option,
  selectedOption,
  handleOptionChange,
}) => {
  return (
    <div className={styles.radioButton}>
      <label htmlFor={option.value}>
        {option.label}
        <input
          type="radio"
          id={option.value}
          name="sort"
          value={option.value}
          checked={selectedOption === option.value}
          onChange={() => handleOptionChange(option.value)}
        />
      </label>
    </div>
  );
};

export default RadioButton;
