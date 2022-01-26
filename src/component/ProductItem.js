import React from "react";

const Products = ({ Product }) => {
  return (
    <div>
      <img src={Product.image}></img>
      <h2>{Product.name}</h2>
      <p>{Product.price}</p>
    </div>
  );
};

export default Products;
