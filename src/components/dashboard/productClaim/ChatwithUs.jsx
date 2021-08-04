import { AttachFile, Message, Send } from "@material-ui/icons";
import React from "react";
import ContentNav from "../contentNav/ContentNav";
import "./ProductClaim.css";
import BK from "../../../assets/images/bk.jpg";

function ChatwithUs() {
  return (
    <div className="chat__withus">
      <ContentNav title="Claim" content="Clarify your claim here!" />

      <div className="product__claim__form">
        <div className="chat__icons">
          <div className="chat__green">
            <Message />
          </div>
          <p>Chat with us</p>
        </div>
        {/* Logo Holder */}
        <div className="logo__holder">
          <div className="img__holder">
            <img className="bk" src={BK} alt="" />
            <p>Write a direct message to Bk</p>
          </div>
        </div>
        <div className="chat__messages">
          <div className="white__left">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate quo inventore velit adipisci numquam dicta ipsa
              repudiandae pariatur maxime dolores!
            </p>
          </div>
          <div className="white__green">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate quo inventore velit adipisci numquam dicta ipsa
              repudiandae pariatur maxime dolores!
            </p>
          </div>
          <div className="white__left">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate quo inventore velit adipisci numquam dicta ipsa
              repudiandae pariatur maxime dolores!
            </p>
          </div>
          <div className="white__green">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate quo inventore velit adipisci numquam dicta ipsa
              repudiandae pariatur maxime dolores!
            </p>
          </div>
            <div className="send__messages">
                <div className="input__message">
                    <input type="text" />
                    <span>
                        <AttachFile/>
                    </span>
                </div>
                <div className="send__btn">
                    <Send/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ChatwithUs;
