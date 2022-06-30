import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Cart = () => {
  const location = useLocation();
  return (
    <div>
      <div>Cart div</div>
      <div>{location.state}</div>
      <Link to="/">Go to cart</Link>
    </div>
  );
};
