import React from 'react'
import ContentNav from '../contentNav/ContentNav';
import './ProductClaim.css'

function ProductClaim() {
    return (
      <div className="product__claim">
        <ContentNav title="Claim" content="Clarify your claim here!" />

        <div className="product__claim__form">
          <div className="insurance__header">
            <p>Product Claim Form</p>
          </div>
          <div className="insurance__form__container">
            <div className="insurance__inputs">
              <div className="insurance__left">
                <div className="insurance__group">
                  <input
                    placeholder="Names"
                    type="text"
                    className="insurance__control"
                  />
                </div>
                <div className="insurance__group">
                  <input
                    placeholder="Phones"
                    type="text"
                    className="insurance__control"
                  />
                </div>
                <div className="insurance__group">
                  <input
                    placeholder="Type of Insurance"
                    type="text"
                    className="insurance__control"
                  />
                </div>
              </div>
              <div className="insurance__right">
                <div className="insurance__group">
                  <input
                    placeholder="Address"
                    type="text"
                    className="insurance__control"
                  />
                </div>
                <div className="insurance__group">
                  <input
                    placeholder="Email"
                    type="text"
                    className="insurance__control"
                  />
                </div>
                <div className="insurance__group">
                  <select name="" id="" className="insurance__control">
                    <option value="">Nature of the claim</option>
                    <option value="">Nature of the claim</option>
                    <option value="">Nature of the claim</option>
                    <option value="">Nature of the claim</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="insurance__textarea">
              <textarea
                placeholder="Describe your claim"
                name=""
                id=""
                cols="30"
                rows="10"
                className="textarea__insurance"
              ></textarea>
            </div>
            <div className="insurance__next__button">
          <button  className="submit__clain">
            Submit your claim
          </button>
        </div>
          </div>
        </div>
      </div>
    );
}

export default ProductClaim
