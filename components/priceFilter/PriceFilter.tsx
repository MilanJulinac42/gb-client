import React, { useEffect, useRef, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import styles from "./PriceFilter.module.scss";

const PriceFilter: React.FC = () => {
  const [range, setRange] = useState<[number, number]>([0, 10000]);

  const handleSliderChange = (newRange: number | number[]) => {
    if (Array.isArray(newRange)) {
      setRange(newRange as [number, number]);
    }
  };

  return (
    <div className={styles.container}>
      <h4>Price</h4>
      <div className={styles.valueWrapper}>
        <div className={styles.values}>
          <span>$</span>
          <input
            className={styles.box}
            type="number"
            value={range[0]}
            readOnly
          />
        </div>
        <div className={styles.values}>
          <span>$</span>
          <input
            className={styles.box}
            type="number"
            value={range[1]}
            readOnly
          />
        </div>
      </div>
      <Slider
        min={0}
        max={10000}
        step={1}
        range
        value={range}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default PriceFilter;
