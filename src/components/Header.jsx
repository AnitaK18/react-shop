import React from "react";
import { Link, useLocation } from "react-router";

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header>
      <Link to="/" className="logo">
        <span>.</span>Glow
      </Link>
      <input type="checkbox" id="toggler" />
      <label htmlFor="toggler" className="fas fa-bars"></label>
      <nav className="navbar">
        {isHomePage ? (
          <>
            <Link to="#home">Головна</Link>
            <Link to="#about">Про нас</Link>
            <Link to="#products">Послуги</Link>
            <Link to="#contact">Контакти</Link>
          </>
        ) : (
          <>
            <Link to="/">Головна</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
