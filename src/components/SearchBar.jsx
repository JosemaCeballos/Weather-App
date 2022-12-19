import React, { useState } from "react";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSearch(city);
      }}
    >
      <input
        type="text"
        placeholder="Ciudad..."
        onChange={(e) => setCity(e.target.value)}
        className="form-input-search-bar"
      />
      <input type="submit" value="Agregar" className="form-submit-search" />
    </form>
  );
}
