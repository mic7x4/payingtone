import React from "react";
import Footer from "../Footer";
import GreenNav from "../views/GreenNav";
import "./Products.css";
import ProductSideNav from "./ProductSideNav";
import categories from "../../utils/categories";
import ProductsList from "./ProductsList";

function Products() {
  return (
    <div>
      <GreenNav />
      <div className="products__container">
        <div className="container product__flex">
          <ProductSideNav categories={categories} />
          <ProductsList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;
