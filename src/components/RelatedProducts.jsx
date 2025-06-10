import { useNavigate } from "react-router";
import "../style.css";

export const RelatedProducts = ({ products }) => {
  const navigate = useNavigate();

  return (
    <section className="related-products">
      <h1 className="heading">
        Схожі <span>товари</span>
      </h1>
      <div className="box-container">
        {products.map((product) => (
          <div
            key={product.id}
            className="box"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <span className="discount">
              {product.discount}
            </span>
            <div className="image">
              <img
                src={product.image}
                alt={product.title}
              />
            </div>
            <div className="content">
              <h3>
                {product.title}
              </h3>
              <div className="price">
                {product.price}
                <span>
                  {product.oldPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
