import React, { useState, useEffect, useMemo, useRef } from "react";
import { Link, useNavigate, useSearchParams, useLocation } from "react-router";
import { PRODUCT_LIST } from "../data/products";
import { applyFilters } from "../utils/filterProducts";

const DEBOUNCE_MS = 200;
const MAX_RESULTS = 6;

export const HeaderSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [params] = useSearchParams();
  const urlQuery = params.get("q") ?? "";

  const [input, setInput] = useState(urlQuery);
  const [debounced, setDebounced] = useState("");
  const [open, setOpen] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    setInput(urlQuery);
  }, [urlQuery, location.pathname]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(input.trim()), DEBOUNCE_MS);
    return () => clearTimeout(id);
  }, [input]);

  useEffect(() => {
    if (!open) return undefined;
    const onMouseDown = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  const results = useMemo(() => {
    if (!debounced) return [];
    return applyFilters(PRODUCT_LIST, { query: debounced }).slice(0, MAX_RESULTS);
  }, [debounced]);

  const buildProductsTarget = (q) => {
    const onProducts = location.pathname === "/products";
    const next = new URLSearchParams(onProducts ? params : "");
    if (q) {
      next.set("q", q);
    } else {
      next.delete("q");
    }
    return { pathname: "/products", search: next.toString() };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    navigate(buildProductsTarget(input.trim()));
  };

  const handleChange = (e) => {
    setInput(e.target.value);
    setOpen(true);
  };

  const handleFocus = () => {
    if (input.trim().length > 0) {
      setOpen(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  const showDropdown = open && debounced.length > 0;

  return (
    <div className="header-search-wrapper" ref={containerRef}>
      <form
        className="header-search"
        onSubmit={handleSubmit}
        onKeyDown={handleKeyDown}
        role="search"
      >
        <input
          type="search"
          value={input}
          onChange={handleChange}
          onFocus={handleFocus}
          placeholder="Пошук..."
          aria-label="Пошук товарів"
        />
        <button type="submit" aria-label="Шукати">
          <i className="fas fa-search"></i>
        </button>
      </form>
      {showDropdown && (
        <div className="header-search-dropdown">
          {results.length === 0 ? (
            <p className="header-search-empty">Нічого не знайдено</p>
          ) : (
            <>
              <ul>
                {results.map((p) => (
                  <li key={p.id}>
                    <Link
                      to={`/product/${p.id}`}
                      className="header-search-result"
                      onClick={() => setOpen(false)}
                    >
                      <img src={p.image} alt="" />
                      <div className="header-search-result-text">
                        <span className="header-search-result-title">
                          {p.title}
                        </span>
                        <span className="header-search-result-price">
                          {p.oldPrice && (
                            <>
                              <s>{p.oldPrice}</s>{" "}
                            </>
                          )}
                          <strong>{p.price}</strong>
                        </span>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                to={buildProductsTarget(debounced)}
                className="header-search-all"
                onClick={() => setOpen(false)}
              >
                Дивитися всі результати →
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};
