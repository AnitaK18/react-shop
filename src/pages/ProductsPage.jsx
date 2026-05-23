import React, { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ProductFilters } from "../components/ProductFilters";
import { ProductGrid } from "../components/ProductGrid";
import { EmptyProductPlaceholder } from "../components/EmptyProductPlaceholder";
import { PRODUCT_LIST } from "../data/products";
import { applyFilters } from "../utils/filterProducts";
import { useUpdateTitle } from "../hooks/useUpdateTitle";

const VALID_CATEGORIES = ["face", "hair", "body", "lips"];
const VALID_DISCOUNTS = [10, 15, 20];
const VALID_SORTS = ["discount-desc", "name-asc"];

const readPrice = (raw) => {
  const n = Number(raw);
  return Number.isFinite(n) && n > 0 ? n : null;
};

const readFilters = (params) => {
  const category = params.get("category");
  const discount = Number(params.get("discount"));
  const sort = params.get("sort");
  const query = (params.get("q") ?? "").trim();
  return {
    category: VALID_CATEGORIES.includes(category) ? category : null,
    discount: VALID_DISCOUNTS.includes(discount) ? discount : null,
    sort: VALID_SORTS.includes(sort) ? sort : "default",
    query: query || null,
    priceMin: readPrice(params.get("priceMin")),
    priceMax: readPrice(params.get("priceMax")),
  };
};

const buildSearchParams = ({ category, discount, sort, query, priceMin, priceMax }) => {
  const next = {};
  if (category) next.category = category;
  if (discount) next.discount = String(discount);
  if (sort && sort !== "default") next.sort = sort;
  if (query) next.q = query;
  if (priceMin) next.priceMin = String(priceMin);
  if (priceMax) next.priceMax = String(priceMax);
  return next;
};

export const ProductsPage = () => {
  const [params, setParams] = useSearchParams();
  const filters = readFilters(params);

  useUpdateTitle("Каталог товарів");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const setFilters = (next) => {
    setParams(buildSearchParams(next));
  };

  const visible = useMemo(
    () => applyFilters(PRODUCT_LIST, filters),
    [filters.category, filters.discount, filters.sort, filters.query, filters.priceMin, filters.priceMax]
  );

  return (
    <>
      <Header />
      <section className="products products-page">
        <h1 className="heading">
          Наш <span>каталог</span>
        </h1>
        <ProductFilters value={filters} onChange={setFilters} />
        {filters.query && (
          <div className="active-search">
            Пошук: <strong>«{filters.query}»</strong>
            <button
              type="button"
              className="active-search-clear"
              aria-label="Скинути пошук"
              onClick={() => setFilters({ ...filters, query: null })}
            >
              ×
            </button>
          </div>
        )}
        <p className="result-count">Знайдено: {visible.length} товарів</p>
        {visible.length === 0 ? (
          <EmptyProductPlaceholder
            title="За вашим запитом нічого не знайдено"
            actionLabel="Скинути фільтри"
            onAction={() => setParams({})}
          />
        ) : (
          <ProductGrid products={visible} />
        )}
      </section>
      <Footer />
    </>
  );
};
