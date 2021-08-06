import React from "react";
import Fridge from "../../assets/images/smartFridge.jpg";
import { ShoppingCart, Star, StarHalf } from "@material-ui/icons";

function ProductCard() {
  return (
    <div className="product__card">
      <div className="card__images">
        <img src={Fridge} alt="" />
      </div>
      <div className="shoppingcart">
        <ShoppingCart />
      </div>
      <div className="product__prices">
        <div className="product__name">
          <h3>Samsung</h3>
          <p>
            <Star />
            <Star />
            <Star />
            <Star />
            <StarHalf />
          </p>
        </div>
        <div className="product__price">
          <h3>320,000 Rwf</h3>
          <p>Blueflame</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
