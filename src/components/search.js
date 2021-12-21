import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";

const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  return (
    <form className="search">
      {/*         <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        /> */}
      <TextField
        type="text"
        id="outlined-basic"
        label="Pesquisar filme"
        value={searchValue}
        onChange={handleSearchInputChanges}
        style={{ width: 350 }}
        color="secondary"
      />
      <Button
        variant="contained"
        color="secondary"
        size="medium"
        type="submit"
        onClick={callSearchFunction}
        value="SEARCH"
      >
        <SearchIcon />
      </Button>
      {/* <input onClick={callSearchFunction} type="submit" value="SEARCH" /> */}
    </form>
  );
};

export default Search;
