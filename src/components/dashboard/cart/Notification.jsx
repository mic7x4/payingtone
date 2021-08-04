import React from "react";
import ContentNav from "../contentNav/ContentNav";
import BK from "../../../assets/images/bk.jpg";
import "./Cart.css";
import { Visibility } from "@material-ui/icons";

function Notification() {
  return (
    <div className="notification__holder">
      <ContentNav title="Notification," content="You have 30 Notifications" />
      <div className="all__notfications">
        <div className="notification__one">
          <div className="notification__bank">
            <img src={BK} alt="" />
          </div>
          <div className="notification__text">
            <h1>Bank Approval</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus aliquid explicabo cum asperiores, obcaecati labore
              eligendi blanditiis similique nisi quod.
            </p>
          </div>
          <div className="notification__btn">
              <button className="notification__viewbtn">
                <div className="view">
                  <Visibility />
                </div>
                <span>view letter</span>
              </button>
          </div>
        </div>
        <div className="notification__one">
          <div className="notification__bank">
            <img src={BK} alt="" />
          </div>
          <div className="notification__text">
            <h1>Bank Approval</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus aliquid explicabo cum asperiores, obcaecati labore
              eligendi blanditiis similique nisi quod.
            </p>
          </div>
          <div className="notification__btn">
              <button className="notification__viewbtn">
                <div className="view">
                  <Visibility />
                </div>
                <span>view letter</span>
              </button>
          </div>
        </div>
        <div className="notification__one">
          <div className="notification__bank">
            <img src={BK} alt="" />
          </div>
          <div className="notification__text">
            <h1>Bank Approval</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus aliquid explicabo cum asperiores, obcaecati labore
              eligendi blanditiis similique nisi quod.
            </p>
          </div>
          <div className="notification__btn">
              <button className="notification__viewbtn">
                <div className="view">
                  <Visibility />
                </div>
                <span>view letter</span>
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notification;
