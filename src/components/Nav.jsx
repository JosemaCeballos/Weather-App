import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <>
      <div className="bg">
        <img
          src="https://cdn-icons-png.flaticon.com/512/5904/5904053.png"
          alt="img"
          className="img"
        />
        <span className="text"> Weather App</span>
      </div>
      <div className="to-searchbar">
        <SearchBar onSearch={onSearch} />
      </div>
    </>
  );
}

export default Nav;
