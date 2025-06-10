import React from "react";
import { Link } from "react-router";
import { PRODUCT_LIST } from "../data/products";

const Products = () => {
  return (
    <section className="products" id="products">
      <h1 className="heading">
        Latest <span>products</span>
      </h1>
      <div className="box-container">
        {PRODUCT_LIST.map((product) => (
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
    </section>
  );
};

export default Products;
