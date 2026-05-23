import React from "react";
import { Link } from "react-router";
import { useCart } from "../hooks/useCart";

export const ProductGrid = ({ products }) => {
  const { addItem } = useCart();

  return (
    <div className="box-container">
      {products.map((product) => (
        <div className="box" key={product.id}>
          <span className="discount">{product.discount}</span>
          <div className="image">
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt="product" />
            </Link>
            <div className="icons">
              <button
                type="button"
                className="cart-btn"
                onClick={() => addItem(product.id)}
              >
                Додати в кошик
              </button>
            </div>
          </div>
          <div className="content">
            <Link to={`/product/${product.id}`}>
              <h3>{product.title}</h3>
            </Link>
            <div className="price">
              {product.price} <span>{product.oldPrice}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
