import React from "react";
import "../assets/styles/components/Search.scss";
import "../assets/styles/CoreStyle.scss";
import { Search } from "@material-ui/icons";

const SearchInput = () => (
  <section className="searchInput">
    <div className="search-area">
      <form
        action="#"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="search"
          name="search"
          id="headerSearch"
          placeholder="Type Search"
        />
        <button type="submit">
          <Search />
        </button>
      </form>
    </div>
  </section>
);

export default SearchInput;
