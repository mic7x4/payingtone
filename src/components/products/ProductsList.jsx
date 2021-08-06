import { Pagination } from "@material-ui/lab";
import React from "react";
import ProductCard from "./ProductCard";
import ProductNavbar from "./ProductNavbar";

function ProductsList() {
  const products = ["", "", "", "", "", ""];
  return (
    <div className="product__list">
      <ProductNavbar />
      <div className="product__list__container">
        {products.map((item) => (
          <ProductCard />
        ))}
      </div>
      <div className="product__pagination">
        <Pagination count={10} />
      </div>
    </div>
  );
}

export default ProductsList;
