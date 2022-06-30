import React from "react";

const Product = ({ item, decrement }) => {
  return (
    <div>
      <h3>
        <span>{item.name}</span> <span>{item.price}</span>*
        <span>{item.quantity}</span>
      </h3>
      <button
        className="cartBtn"
        onClick={() => {
          if (item.quantity > 0) {
            decrement(item.quantity - 1, item.id, item.name);
          }
          //   console.log(item.id);
        }}
        // {item.quantity===0?'disabled':''}
      >
        {item.quantity > 0 ? "Add to cart" : "Sold out"}
      </button>
    </div>
  );
};

export default Product;
