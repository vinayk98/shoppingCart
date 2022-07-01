import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Cart = () => {
  const location = useLocation();
  const { additem, addName } = location.state;

  return (
    <div>
      <div>
        <h1>add to cart</h1>

        <h3>
          <span>{additem} </span>
          <span>{addName}</span>
          <span>*</span>
        </h3>
      </div>

      <Link to="/">Go to cart</Link>

      <br />
      <br />
      <br />
      <p>total amount</p>
    </div>
  );
};
