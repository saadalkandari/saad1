import React from "react";
import ProductItem from "./ProductItem";
import products from "../products";

const ProductList = () => {
  return (
    <div>
      {products.map((Product) => (
        <ProductItem Product={Product} />
      ))}
    </div>
  );
};

export default ProductList;
