import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { useCart } from "../hooks/useCart";
import { PRODUCT_LIST } from "../data/products";
import { parsePrice, formatPrice } from "../utils/price";

const CartDrawer = () => {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    clearCart,
    totalPrice,
  } = useCart();
  const [status, setStatus] = useState("idle");
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeCart();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const visibleItems = items
    .map((it) => {
      const product = PRODUCT_LIST.find((p) => p.id === it.id);
      return product ? { ...it, product } : null;
    })
    .filter(Boolean);

  const handleCheckout = () => {
    setStatus("success");
    timeoutRef.current = setTimeout(() => {
      clearCart();
      closeCart();
      setStatus("idle");
      timeoutRef.current = null;
    }, 2500);
  };

  return (
    <>
      <div
        className={`cart-drawer-overlay ${isOpen ? "is-open" : ""}`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />
      <aside
        className={`cart-drawer ${isOpen ? "is-open" : ""}`}
        onClick={(e) => e.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="cart-drawer-header">
          <h2>Кошик</h2>
          <button
            type="button"
            className="cart-drawer-close"
            onClick={closeCart}
            aria-label="Закрити кошик"
          >
            ×
          </button>
        </div>

        <div className="cart-drawer-body">
          {status === "success" ? (
            <div className="cart-success">Дякуємо за замовлення!</div>
          ) : visibleItems.length === 0 ? (
            <div className="cart-empty">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p>Кошик порожній</p>
              <Link to="/products" className="btn" onClick={closeCart}>
                Перейти до каталогу
              </Link>
            </div>
          ) : (
            <ul className="cart-list">
              {visibleItems.map(({ id, quantity, product }) => (
                <li className="cart-item" key={id}>
                  <img src={product.image} alt={product.title} />
                  <div className="cart-item-info">
                    <h3>{product.title}</h3>
                    <p className="cart-item-price">
                      {formatPrice(parsePrice(product.price))}
                    </p>
                    <div className="cart-qty-control">
                      <button
                        type="button"
                        onClick={() => updateQuantity(id, quantity - 1)}
                        aria-label="Зменшити кількість"
                      >
                        −
                      </button>
                      <span>{quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(id, quantity + 1)}
                        aria-label="Збільшити кількість"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="cart-item-remove"
                    onClick={() => removeItem(id)}
                    aria-label="Видалити з кошика"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {status === "idle" && visibleItems.length > 0 && (
          <footer className="cart-drawer-footer">
            <div className="cart-total">
              Разом: <strong>{formatPrice(totalPrice)}</strong>
            </div>
            <button
              type="button"
              className="btn cart-checkout"
              onClick={handleCheckout}
            >
              Оформити
            </button>
          </footer>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;
