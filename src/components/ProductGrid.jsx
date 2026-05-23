import React from "react";
import { Link } from "react-router";

export const ProductGrid = ({ products }) => (
  <div className="box-container">
    {products.map((product) => (
      <div className="box" key={product.id}>
        <span className="discount">{product.discount}</span>
        <div className="image">
          <img src={product.image} alt="product" />
          <div className="icons">
            <Link to={`/product/${product.id}`} className="cart-btn">
              Add to cart
            </Link>
          </div>
        </div>
        <div className="content">
          <h3>{product.title}</h3>
          <div className="price">
            {product.price} <span>{product.oldPrice}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);
