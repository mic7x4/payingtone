import { Send } from "@material-ui/icons";
import React from "react";
import "./InsuranceClaim.css";
import upload from "../../../assets/images/upload.png";

function PoliceClaimForm() {
  return (
    <div className="police__claim__holder">
      <div className="insurance__header">
        <p>Police Claim Form</p>
      </div>
      <div className="police__claim__form">
        <div className="police__upload">
          <label htmlFor="upload">
            <input type="file" id="upload" className="police__form__upload" />
            <img src={upload} className="upload__image" />
          </label>
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

export default PoliceClaimForm;
