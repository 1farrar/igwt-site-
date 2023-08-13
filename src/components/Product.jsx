import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product: { image, slug, name, price } }) => {
  return (
    <div>
      <Link to={`/products/${slug}`}>
        <div className="product-card">
          <img
            src={image}
            alt=""
            className="product-image"
            width={150}
            height={150}
          />
          <p className="product-name">{name}</p>
          <p className="product-price">₦ {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
