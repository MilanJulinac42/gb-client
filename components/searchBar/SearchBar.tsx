import React, { useState, useRef } from "react";
import axios from "axios";
import styles from "./SearchBar.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [productOptions, setProductOptions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showBasketBox, setShowBasketBox] = useState<boolean>(false);
  const searchBarRef = useRef(null);

  useOnClickOutside(searchBarRef, () => setShowBasketBox(false));

  const handleSelectClick = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "http://localhost:9090/gift-basket/baskets-names"
      );
      setProductOptions(response.data.baskets);
      setShowBasketBox(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching product options", error);
    }
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredOptions = productOptions.filter((option) =>
    option.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOptionClick = (optionName: string) => {
    setSearchQuery(optionName);
    setShowBasketBox(false);
  };

  return (
    <div className={styles.searchBar} ref={searchBarRef}>
      <div className={styles.selectWrapper}>
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
          onClick={handleSelectClick}
        />
        <span className={styles.searchIcon}>
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
      {showBasketBox && (
        <div className={styles.basketBoxWrapper}>
          {filteredOptions.map((option, index) => (
            <div
              key={index}
              className={styles.basketNameWrapper}
              onClick={() => handleOptionClick(option.name)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
