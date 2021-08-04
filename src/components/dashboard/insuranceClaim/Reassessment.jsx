import { Description, Send } from "@material-ui/icons";
import React from "react";

function Reassessment() {
  return (
    <div className="police__claim__holder">
      <div className="insurance__header">
        <p>Re-assesment note</p>
      </div>
      <div className="police__claim__form">
        <div className="reassesment__left">
          <div className="reassessment__note">
            <div className="assessment__logo">
              <img src="" alt="" />
            </div>
            <p>Sanlam Insurance ltd</p>
          </div>
          <div className="reassesment__left__p">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
              sed earum! Nisi ratione omnis nemo quam quibusdam est totam quos?
            </p>
          </div>
          <div className="document">
            <Description className='all__greens' /> <span>Document.pdf</span>
          </div>
        </div>
        <div className="police__chat__side">
          <div className="chat__image">
            <img src="" alt="" />
          </div>
          <div className="police__text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              repellat.
            </p>
          </div>
          <div className="police__claim__input">
            <input type="text" className="input__claim" />
            <span className="police__send">
              <Send />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reassessment;
