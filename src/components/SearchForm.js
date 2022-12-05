import React from "react";
import { useGlobalContext } from "../context";
import { useState } from "react";

const SearchForm = () => {
  const { setSearchingTerm } = useGlobalContext();

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your cocktail</label>
          <input
            onChange={(e) => setSearchingTerm(e.target.value)}
            type="text"
            name="name"
            id="name"
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
