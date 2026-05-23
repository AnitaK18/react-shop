import { Route, Routes } from "react-router";
import { HomePage } from "../pages/HomePage";
import { BrowserRouter } from "react-router";
import { ProductPage } from "../pages/ProductPage";
import { ProductsPage } from "../pages/ProductsPage";
import { AuthorPage } from "../pages/AuthorPage";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/author" element={<AuthorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
