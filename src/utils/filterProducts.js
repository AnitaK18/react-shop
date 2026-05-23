import { parsePrice } from "./price";

export const applyFilters = (products, { category, discount, sort, query, priceMin, priceMax }) => {
  let result = products;

  if (category) {
    result = result.filter((p) => p.category === category);
  }

  if (discount) {
    result = result.filter((p) => p.discountPercent >= discount);
  }

  if (priceMin != null) {
    result = result.filter((p) => parsePrice(p.price) >= priceMin);
  }

  if (priceMax != null) {
    result = result.filter((p) => parsePrice(p.price) <= priceMax);
  }

  if (query) {
    const tokens = query.toLocaleLowerCase("uk").split(/\s+/).filter(Boolean);
    if (tokens.length > 0) {
      result = result.filter((p) => {
        const haystack = p.title.toLocaleLowerCase("uk");
        return tokens.every((t) => haystack.includes(t));
      });
    }
  }

  if (sort === "discount-desc") {
    result = [...result].sort((a, b) => b.discountPercent - a.discountPercent);
  } else if (sort === "name-asc") {
    result = [...result].sort((a, b) => a.title.localeCompare(b.title, "uk"));
  }

  return result;
};
