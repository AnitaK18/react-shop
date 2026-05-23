import React from "react";
import { Link } from "react-router";
import { PRODUCT_LIST } from "../data/products";
import { ProductGrid } from "./ProductGrid";

const TEASER_COUNT = 6;

const Products = () => {
  const teaser = PRODUCT_LIST.slice(0, TEASER_COUNT);

  return (
    <section className="products" id="products">
      <h1 className="heading">
        Latest <span>products</span>
      </h1>
      <ProductGrid products={teaser} />
      <div className="products-cta">
        <Link to="/products" className="btn">
          Дивитись усі
        </Link>
      </div>
    </section>
  );
};

export default Products;
