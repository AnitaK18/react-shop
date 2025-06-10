import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>Корисні посилання</h3>
          <Link to="#home">Головна</Link>
          <Link to="#about">Про нас</Link>
          <Link to="#products">Послуги</Link>
          <Link to="#review">Відгуки</Link>
          <Link to="#contact">Контакти</Link>
        </div>
        <div className="box">
          <h3>Контакти</h3>
          <a href="tel:+380991112233">+38 099 111 22 33</a>
          <a href="mailto:beautysalon@email.com">beautysalon@email.com</a>
          <Link to="#">м. Черкаси, вул. Салонна, 15</Link>
        </div>
        <div className="box">
          <h3>Слідкуй за нами</h3>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">TikTok</a>
        </div>
      </div>
      <div className="credit">
        &copy; {new Date().getFullYear()} <span>BeautySalon</span> | Всі права
        захищено | <Link to="/author">Про автора</Link>
      </div>
    </section>
  );
};

export default Footer;
