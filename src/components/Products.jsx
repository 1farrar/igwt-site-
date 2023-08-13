import React from "react";

import Product from "./Product";
import { products } from "../data";

const Products = () => {
  return (
    <div className="container">
      <div className="product-container">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
