import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data";
import { useStateContext } from "../context/ProductContext";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [qty, setQty] = useState(0);

  const { slug } = useParams();

  const { addItem } = useStateContext();

  useEffect(() => {
    if (slug) {
      setProduct(() => products.filter((pd) => pd.slug === slug)[0]);
    }
  }, [slug]);

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 0) {
        return 0;
      }

      return prevQty - 1;
    });
  };

  console.log();
  return (
    <div className="container">
      {product && (
        <div className="product-detail-container">
          <div>
            <div className="image-container">
              <img
                src={product.image}
                alt=""
                className="product-detail-image"
              />
            </div>
          </div>

          <div className="product-detail-desc">
            <h1>{product.name}</h1>
            <p className="price">₦ {product.price}</p>
            <div className="reviews">
              <p>size</p>
              {product?.size?.map((item, idx) => (
                <button key={idx}>{item}</button>
              ))}
              {/* <button>{product.size[0]}</button>
              <button>{product.size[1]}</button>
              <button>{product.size[2]}</button> */}
            </div>
            <div>
              <h4>Color</h4>
              <div>{product.color}</div>
            </div>

            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick={decQty}>
                  <AiOutlineMinus />
                </span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
            <div className="buttons">
              <button
                type="button"
                className="add-to-cart"
                onClick={() => addItem(product, qty)}
              >
                Add to Cart
              </button>
              <button type="button" className="buy-now" onClick="">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
