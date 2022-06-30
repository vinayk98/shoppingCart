import React from "react";
import { Link } from "react-router-dom";
import { Data } from "./Data";
import Product from "./Product";

export const Products = () => {
  const [data, setData] = React.useState(Data);
  const decrement = (newQuantity, id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        item.quantity = newQuantity;
      }
      return item;
    });
    setData(newData);
  };
  return (
    <div>
      {data.map((item, index) => {
        return <Product key={index} item={item} decrement={decrement} />;
      })}
      <Link to="/cart">Go to cart</Link>
    </div>
  );
};
