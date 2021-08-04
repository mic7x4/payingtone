import React, { useState } from "react";
import Footer from "../../Footer";
import AfterNavSection from "../../views/AfterNavSection";
import GreenNav from "../../views/GreenNav";
import ConfirmContributionModal from "./ConfirmContributionModal";

function ConfirmCart() {
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="notifications__holder">
      <GreenNav />
      <AfterNavSection
        heading="Approve Cart"
        paragraph="Created by Kamaiza Joana"
      />
      <ConfirmContributionModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <div className="container">
        <div className="approval__texts">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            consectetur, maxime minus quae accusantium soluta voluptatibus illo
            nihil aspernatur cupiditate voluptatem veritatis natus a corporis
            excepturi velit ipsa, eaque in iure architecto mollitia nobis. Quasi
            iure sequi quam pariatur voluptas?
          </p>
        </div>
      </div>
      <div className="notification__table__container">
        <div className="tables__items">
          <div className="cart__table__holder">
            <div className="cart__table__header">
              <h5>Item</h5>
              <h5>Qty</h5>
              <h5>Price per Unit</h5>
              <h5>Delivery</h5>
              <h5>Total</h5>
            </div>
            <ul className="cart__items__holder">
              {items.map((i) => (
                <li className="cart__list__item" key={i}>
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
            <div className="cart__payment__side notify">
              <div className="cart__subtotal">
                <p className="sub__cart__left">Total</p>
                <p className="sub__cart__price">150,000 Rwf</p>
              </div>
              <div className="cat__total">
                <p className="total__cart__right">Individual Payment</p>
                <p className="total__cart__price">250,000 Rwf</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contribution__btn">
        <button onClick={() => setModalIsOpen(true)}>
          Confirm your Contribution
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default ConfirmCart;
