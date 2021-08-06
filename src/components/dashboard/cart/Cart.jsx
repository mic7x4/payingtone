import React from "react";
import { Link } from "react-router-dom";
import ContentNav from "../contentNav/ContentNav";
import "./Cart.css";

function Cart() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  items.map((i) => {
    console.log(i);
  });
  return (
    <div className="cart__holder">
      <ContentNav title="My Cart," content="All products in the cart" />
      <div className="cart__navbar">
        <div className="cart__navbar__left">
          <div className="cart__individual">
            <Link to='/dashboard/cart' name="" id="" className="cart__select1 active">
                Individual
            </Link>
          </div>
          <div className="cart__individual">
            <Link to='/dashboard/collective' name="" id="" className="cart__select1">
              Collection
            </Link>
          </div>
        </div>
      </div>
      <div className="cart__table__holder">
        <div className="cart__table__header">
          <h5>Item</h5>
          <h5>Qty</h5>
          <h5>Price</h5>
          <h5>Delivery</h5>
          <h5>Total</h5>
          <h5>Status</h5>
          <h5></h5>
        </div>
        <ul className="cart__items__holder">
          {items.map((i) => (
            <li className="cart__list__item">
              <p>Body Lotion</p>
              <p>100,000Rwf</p>
              <p>2000rwf</p>
              <p>12000</p>
              <p>pending</p>
              <div className="cart__button__list">
                <button>Pay</button>
              </div>
            </li>
          ))}
        </ul>
        <div className="cart__payment__side">
          <div className="cart__subtotal">
            <p className="sub__cart__left">Subtotal</p>
            <p className="sub__cart__price">150,000 Rwf</p>
          </div>
          <div className="cat__total">
            <p className="total__cart__right">Subtotal</p>
            <p className="total__cart__price">250,000 Rwf</p>
          </div>
          <div className="cart__pay__btn">
            <button>Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
