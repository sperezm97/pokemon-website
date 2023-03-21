import React from "react";
import styles from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { getPokemonByName, getAllPokemon } from "../../app/actions";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    if (event.target.value === "") {
      dispatch(getAllPokemon());
    }
    setSearchTerm(event.target.value);
  };

  const handleSearch = (event) => {
    dispatch(getPokemonByName(event));
  };

  const handleKeyPress = () => {
    console.log();
    if (searchTerm.length !== 0) {
      handleSearch(searchTerm);
    } else {
      dispatch(getAllPokemon());
    }
  };

  return (
    <>
      <input
        className={styles.input}
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleKeyPress}>Search</button>
    </>
  );
};

export default SearchBar;
