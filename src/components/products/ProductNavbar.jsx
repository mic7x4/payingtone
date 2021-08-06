import { Search } from "@material-ui/icons";
import React from "react";

function ProductNavbar() {
  return (
    <div className="product__navbar">
      <div className="navbar__text">
        <h1>All Products & Services</h1>
      </div>
      <div className="product__search">
        <input
          type="text"
          placeholder="Search a product"
          className="product__search__input"
        />
        <div className="search__icon">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default ProductNavbar;
