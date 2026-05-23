export const applyFilters = (products, { category, discount, sort }) => {
  let result = products;

  if (category) {
    result = result.filter((p) => p.category === category);
  }

  if (discount) {
    result = result.filter((p) => p.discountPercent >= discount);
  }

  if (sort === "discount-desc") {
    result = [...result].sort((a, b) => b.discountPercent - a.discountPercent);
  } else if (sort === "name-asc") {
    result = [...result].sort((a, b) => a.title.localeCompare(b.title, "uk"));
  }

  return result;
};
