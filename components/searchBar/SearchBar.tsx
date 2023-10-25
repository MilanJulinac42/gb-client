import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./SearchBar.module.scss";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [productOptions, setProductOptions] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSelectClick = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:9090/gift-basket/baskets-names");
      console.log(response.data.baskets)
      setProductOptions(response.data.baskets);
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

  return (
    <div className={styles.searchBar}>
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
      <select>
        <option value="" disabled>
          Select
        </option>
        {isLoading && <option value="">Loading...</option>}
        {filteredOptions.map((option, index) => (
          <option key={index} value={option.name}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchBar;
