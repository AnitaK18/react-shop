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

const readFilters = (params) => {
  const category = params.get("category");
  const discount = Number(params.get("discount"));
  const sort = params.get("sort");
  return {
    category: VALID_CATEGORIES.includes(category) ? category : null,
    discount: VALID_DISCOUNTS.includes(discount) ? discount : null,
    sort: VALID_SORTS.includes(sort) ? sort : "default",
  };
};

const buildSearchParams = ({ category, discount, sort }) => {
  const next = {};
  if (category) next.category = category;
  if (discount) next.discount = String(discount);
  if (sort && sort !== "default") next.sort = sort;
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
    [filters.category, filters.discount, filters.sort]
  );

  return (
    <>
      <Header />
      <section className="products products-page">
        <h1 className="heading">
          Наш <span>каталог</span>
        </h1>
        <ProductFilters value={filters} onChange={setFilters} />
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
