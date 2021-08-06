import { ArrowRight } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { Link } from "react-router-dom";


function ProductSideNav({ categories }) {
  const [active, setActive] = useState(false);
  return (
    <div className="product__sidenav">
      <h2>Categories</h2>
      <nav id="menu">
        <ul className="navbar__container">
          {categories.map((category) => (
            <li className="category" onClick={() => setActive(true)}>
              <Link style={{ display: "flex", alignItems: "center" }}>
                <span>{category.title}</span>
                <ArrowRight className="category-arrow" />
              </Link>
              <ul>
                <li className="item">
                  <Link>Amazing</Link>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default ProductSideNav;
