export const parsePrice = (str) => Number(String(str).replace(/[^0-9.]/g, "")) || 0;

export const formatPrice = (num) => `$${Number(num).toFixed(2)}`;
