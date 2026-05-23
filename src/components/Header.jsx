import React from "react";
import { Link } from "react-router";
import { HeaderSearch } from "./HeaderSearch";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        <span>.</span>Glow
      </Link>
      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler" className="fas fa-bars"></label>
      <nav className="navbar">
        <Link to="/#home">Головна</Link>
        <Link to="/#about">Про нас</Link>
        <Link to="/products">Каталог</Link>
        <Link to="/#contact">Контакти</Link>
      </nav>
      <HeaderSearch />
    </header>
  );
};

export default Header;
