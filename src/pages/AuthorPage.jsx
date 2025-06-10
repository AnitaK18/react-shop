import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AuthorPhoto from "../assets/images/author-photo.jpeg";
import { useUpdateTitle } from "../hooks/useUpdateTitle";

export const AuthorPage = () => {
  useUpdateTitle("Про автора");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      
      <section className="author-page">
        <div className="heading">
          <span>Про</span> автора
        </div>
        
        <div className="row">
          <div className="image-container">
            <div className="author-image">
              <img
                src={AuthorPhoto}
                alt="Фото автора"
              />
            </div>
          </div>

          <div className="content">
            <h2>Привіт! Я - автор цього проекту</h2>
            
            <p className="description">
              Мене звати Аніта, і я студентка університету, яка з захопленням вивчає веб-розробку. 
              Цей проект є моєю курсовою роботою, над якою я працювала з великим ентузіазмом.
            </p>

            <div className="info-block">
              <h3>Про мене:</h3>
              <ul>
                <li>Студентка факультету інформаційних технологій</li>
                <li>Захоплююся фронтенд розробкою</li>
                <li>Люблю створювати красиві та функціональні веб-сайти</li>
                <li>Завжди прагну вивчати нові технології</li>
              </ul>
            </div>

            <div className="info-block">
              <h3>Технології проекту:</h3>
              <ul>
                <li>React.js - для створення інтерфейсу</li>
                <li>React Router - для навігації</li>
                <li>CSS3 - для стилізації</li>
                <li>Vite - як збірник проекту</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}; 