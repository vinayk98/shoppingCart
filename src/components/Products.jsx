import React from "react";
import { Link } from "react-router-dom";
import { Data } from "./Data";
import Product from "./Product";

export const Products = () => {
  const [data, setData] = React.useState(Data);
  const [additem, setAdditem] = React.useState([]);
  const [addName, setAddName] = React.useState([]);
  const decrement = (newQuantity, id, itemName, itemPrice) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        item.quantity = newQuantity;
      }
      return item;
    });
    setData(newData);
    setAdditem([...itemName, itemName]);
    setAddName([...itemPrice, itemPrice]);
  };
  console.log(additem);
  return (
    <div>
      {data.map((item, index) => {
        return <Product key={index} item={item} decrement={decrement} />;
      })}
      <Link to="/cart" state={{ additem: additem, addName: addName }}>
        Go to cart
      </Link>
    </div>
  );
};
