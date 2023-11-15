import React, { ChangeEvent } from "react";
import styles from "./Checkbox.module.scss";

interface CustomCheckboxProps {
  label: string;
  isChecked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  isChecked,
  onChange,
}) => {
  return (
    <label className={styles.customCheckbox}>
      <input type="checkbox" checked={isChecked} onChange={onChange} />
      <span className={styles.checkmark}></span>
      {label}
    </label>
  );
};

export default CustomCheckbox;
