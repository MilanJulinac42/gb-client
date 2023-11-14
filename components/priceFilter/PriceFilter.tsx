import { useEffect, useRef } from "react";
import * as noUiSlider from "nouislider";
import Nouislider from "nouislider-react";
import "nouislider/dist/nouislider.css";
import styles from "./PriceFilter.module.scss";

const PriceFilter: React.FC = () => {
  let minPrice = 0;
  let maxPrice = 1000;

  const minPriceInputRef = useRef<HTMLInputElement>(null);
  const maxPriceInputRef = useRef<HTMLInputElement>(null);
  const priceSliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const minPriceInput = minPriceInputRef.current;
    const maxPriceInput = maxPriceInputRef.current;
    const priceSlider = priceSliderRef.current;

    if (!minPriceInput || !maxPriceInput || !priceSlider) return;

    const slider = noUiSlider.create(priceSlider, {
      start: [minPrice, maxPrice],
      connect: true,
      range: {
        min: 0,
        max: 1000,
      },
    });

    slider.on("update", (values: any, handle) => {
      const parsedValue = parseInt(values[handle], 10);

      if (handle === 0) {
        minPrice = parsedValue;
        minPriceInput.value = String(minPrice);
      } else {
        maxPrice = parsedValue;
        maxPriceInput.value = String(maxPrice);
      }
    });
  }, []);

  return (
    <div className={styles.priceFilterContainer}>
      <Nouislider start={15} range={{ min: 0, max: 150 }} tooltips={true} />
    </div>
  );
};

export default PriceFilter;
