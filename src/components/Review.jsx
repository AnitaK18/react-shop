import React from "react";
import User1Image from '../assets/images/pic-2.png';

const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        Відгуки 
      </h1>
      <div className="box-container">
        <div className="box">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="far fa-star" />
          </div>
          <p>
            Чудовий сервіс і дуже приємна атмосфера! Після візиту почуваюсь як
            нова людина.
          </p>
          <div className="user">
            <img src={User1Image} alt="user" />
            <div className="user-info">
              <h3>Оксана</h3>
              <span>Постійна клієнтка</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
