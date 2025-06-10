import React, { useEffect } from "react";
import { useParams } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PRODUCT_LIST } from "../data/products";
import { RelatedProducts } from "../components/RelatedProducts";
import { EmptyProductPlaceholder } from "../components/EmptyProductPlaceholder";
import { useUpdateTitle } from "../hooks/useUpdateTitle";

export const ProductPage = () => {
  const { id } = useParams();

  const product = PRODUCT_LIST.find((p) => p.id === parseInt(id));

  const relatedProducts =
    PRODUCT_LIST.filter((p) => p.id !== product?.id).slice(0, 3) || [];

  useUpdateTitle(product?.title || '')

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <>
        <Header />
        <EmptyProductPlaceholder />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Основна секція товару */}
      <section className="product-detail">
        <div className="row">
          <div className="image-container">
            <div className="main-image">
              <span className="discount">{product.discount}</span>
              <img src={product.image} alt={product.title} />
            </div>
          </div>

          <div className="content">
            <h1>{product.title}</h1>

            <div className="price">
              {product.price}
              <span>{product.oldPrice}</span>
            </div>

            <p className="description">{product.description}</p>

            <div className="features">
              <h3>Особливості:</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="actions">
              <button className="btn">Додати в кошик</button>
              <button className="btn btn-outline">Додати в обране</button>
            </div>
          </div>
        </div>
      </section>

      {/* Секція схожих товарів */}
      <RelatedProducts products={relatedProducts} />
      <Footer />
    </>
  );
};
