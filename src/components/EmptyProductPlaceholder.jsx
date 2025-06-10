import { Link } from "react-router";

export const EmptyProductPlaceholder = () => (
  <section
    className="product-not-found"
    style={{ padding: "10rem 9%", textAlign: "center" }}
  >
    <h1 className="heading">Товар не знайдено</h1>
    <Link to="/" className="btn">
      Повернутись на головну
    </Link>
  </section>
);
