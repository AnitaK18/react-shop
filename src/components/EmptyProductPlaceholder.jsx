import { Link } from "react-router";

export const EmptyProductPlaceholder = ({
  title = "Товар не знайдено",
  actionLabel = "Повернутись на головну",
  to,
  onAction,
}) => (
  <section
    className="product-not-found"
    style={{ padding: "10rem 9%", textAlign: "center" }}
  >
    <h1 className="heading">{title}</h1>
    {onAction ? (
      <button type="button" className="btn" onClick={onAction}>
        {actionLabel}
      </button>
    ) : (
      <Link to={to ?? "/"} className="btn">
        {actionLabel}
      </Link>
    )}
  </section>
);
