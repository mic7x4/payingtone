import React from "react";
import "./ContentNav.css";
import Avatar from "../../../assets/images/africanone.jpg";
import { Search } from "@material-ui/icons";

function ContentNav({ title, content }) {
  return (
    <div className="content__nav">
      <div className="leftside">
        <h1>{title}</h1>
        <p className="leftside__p">{content}</p>
      </div>
      <div className="rightside">
        <div className="dashboard__search">
          <label htmlFor="search">
            <Search className="search__icon" />
          </label>
          <input
            type="text"
            className="search__dash"
            id="search"
            placeholder="Search"
          />
        </div>
        <div className="admin__avatar">
          <img src={Avatar} alt="" className="avatar" />
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default ContentNav;
