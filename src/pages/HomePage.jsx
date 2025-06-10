import React, { useEffect } from "react";
import { useLocation } from "react-router";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Icons from "../components/Icons";
import DailyFortune from "../components/DailyFortune";
import Products from "../components/Products";
import Review from "../components/Review";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useUpdateTitle } from "../hooks/useUpdateTitle";

export const HomePage = () => {
  const location = useLocation();

  useUpdateTitle("Твоя краса — наша турбота");

  // Обработка якорей при переходе на главную страницу
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Icons />
      <DailyFortune />
      <Products />
      <Review />
      <Contact />
      <Footer />
    </>
  );
};
