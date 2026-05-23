import { createContext, useEffect, useMemo, useState } from "react";
import { PRODUCT_LIST } from "../data/products";
import { parsePrice } from "../utils/price";

const STORAGE_KEY = "glow.cart";

const readInitialItems = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(readInitialItems);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // localStorage may be unavailable or full; ignore
    }
  }, [items]);

  const addItem = (id) => {
    setItems((prev) => {
      const existing = prev.find((it) => it.id === id);
      if (existing) {
        return prev.map((it) =>
          it.id === id ? { ...it, quantity: it.quantity + 1 } : it
        );
      }
      return [...prev, { id, quantity: 1 }];
    });
    setIsOpen(true);
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setItems((prev) => {
      if (quantity <= 0) return prev.filter((it) => it.id !== id);
      return prev.map((it) => (it.id === id ? { ...it, quantity } : it));
    });
  };

  const clearCart = () => setItems([]);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const totalCount = useMemo(
    () => items.reduce((sum, it) => sum + it.quantity, 0),
    [items]
  );

  const totalPrice = useMemo(
    () =>
      items.reduce((sum, it) => {
        const product = PRODUCT_LIST.find((p) => p.id === it.id);
        return product ? sum + parsePrice(product.price) * it.quantity : sum;
      }, 0),
    [items]
  );

  const value = {
    items,
    isOpen,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    openCart,
    closeCart,
    totalCount,
    totalPrice,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
};
