import React from "react";
import { CATEGORIES } from "../data/products";

const DISCOUNT_OPTIONS = [
  { value: "", label: "Будь-яка" },
  { value: "10", label: "Від 10%" },
  { value: "15", label: "Від 15%" },
  { value: "20", label: "Від 20%" },
];

const SORT_OPTIONS = [
  { value: "default", label: "За замовчуванням" },
  { value: "discount-desc", label: "Спочатку зі знижкою" },
  { value: "name-asc", label: "За назвою (А-Я)" },
];

export const ProductFilters = ({ value, onChange }) => {
  const handleCategory = (category) => {
    onChange({ ...value, category });
  };

  const handleDiscount = (e) => {
    const raw = e.target.value;
    onChange({ ...value, discount: raw ? Number(raw) : null });
  };

  const handleSort = (e) => {
    onChange({ ...value, sort: e.target.value });
  };

  const handlePrice = (key) => (e) => {
    const raw = e.target.value;
    const num = Number(raw);
    onChange({
      ...value,
      [key]: raw && Number.isFinite(num) && num > 0 ? num : null,
    });
  };

  return (
    <div className="product-filters">
      <div className="row">
        <button
          type="button"
          className={`chip ${value.category ? "" : "active"}`}
          onClick={() => handleCategory(null)}
        >
          Усі
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.value}
            type="button"
            className={`chip ${value.category === c.value ? "active" : ""}`}
            onClick={() => handleCategory(c.value)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="row">
        <label htmlFor="discount-select">Знижка:</label>
        <select
          id="discount-select"
          value={value.discount ?? ""}
          onChange={handleDiscount}
        >
          {DISCOUNT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>

        <label htmlFor="sort-select">Сортувати:</label>
        <select
          id="sort-select"
          value={value.sort}
          onChange={handleSort}
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      <div className="row">
        <label htmlFor="price-min">Ціна, $:</label>
        <input
          id="price-min"
          type="number"
          min="0"
          step="1"
          placeholder="Від"
          value={value.priceMin ?? ""}
          onChange={handlePrice("priceMin")}
          className="price-input"
        />
        <input
          id="price-max"
          type="number"
          min="0"
          step="1"
          placeholder="До"
          value={value.priceMax ?? ""}
          onChange={handlePrice("priceMax")}
          className="price-input"
        />
      </div>
    </div>
  );
};
