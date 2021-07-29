import React from "react";
import ContentNav from "../contentNav/ContentNav";
import PaytoneLogo from "../../../assets/images/footerlogo.png";
import "./Messaging.css";
import { Send } from "@material-ui/icons";

function Messaging() {
  return (
    <div className="user__inbox">
      <ContentNav
        title="Messages & Offers"
        content="Here are all your messages report"
      />
      <div className="message_wrapper">
        <div className="conversation__wrapper">
          <div className="logo__text">
            <div className="message__logo">
              <img src={PaytoneLogo} alt="" />
            </div>
            <div className="text__message">
              <p>Messages</p>
            </div>
          </div>
          <div className="all__messages">
            <div className="received__messages">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Officia vero earum
                officiis provident sed at dolores? Iusto dicta nesciunt sunt.
              </p>
            </div>
            <div className="all__replies">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div className="chat__input">
              <input type="text" className="input__chat" />
              <Send className="send__btn" />
            </div>
          </div>
        </div>
        <div className="offers">
          <div className="message__offers">
            <p className='offers__head'>Offers</p>
            <ul className='offers__messages__wrapper'>
              <li className='messaging__holder'>
                <div className="offer__item__text">
                  <h6>10</h6>
                  <p>Mon</p>
                </div>
                <div className="offer__item__p">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Accusamus enim tenetur libero blanditiis fugit harum aperiam rerum similique provident unde.
                  </p>
                </div>
              </li>
              <li className='messaging__holder'>
                <div className="offer__item__text">
                  <h6>10</h6>
                  <p>Mon</p>
                </div>
                <div className="offer__item__p">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Accusamus enim tenetur libero blanditiis fugit harum aperiam rerum similique provident unde.
                  </p>
                </div>
              </li>
              <li className='messaging__holder'>
                <div className="offer__item__text">
                  <h6>10</h6>
                  <p>Mon</p>
                </div>
                <div className="offer__item__p">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Accusamus enim tenetur libero blanditiis fugit harum aperiam rerum similique provident unde.
                  </p>
                </div>
              </li>
              <li className='messaging__holder'>
                <div className="offer__item__text">
                  <h6>10</h6>
                  <p>Mon</p>
                </div>
                <div className="offer__item__p">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Accusamus enim tenetur libero blanditiis fugit harum aperiam rerum similique provident unde.
                  </p>
                </div>
              </li>
              <li className='messaging__holder'>
                <div className="offer__item__text">
                  <h6>10</h6>
                  <p>Mon</p>
                </div>
                <div className="offer__item__p">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Accusamus enim tenetur libero blanditiis fugit harum aperiam rerum similique provident unde.
                  </p>
                </div>
              </li>
              <li className='messaging__holder'>
                <div className="offer__item__text">
                  <h6>10</h6>
                  <p>Mon</p>
                </div>
                <div className="offer__item__p">
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Accusamus enim tenetur libero blanditiis fugit harum aperiam rerum similique provident unde.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messaging;
