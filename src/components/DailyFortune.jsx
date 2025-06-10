import React, { useEffect, useState } from "react";

const fortunes = [
  "Сьогодні вдалий день, щоб почати щось нове.",
  "Очікуй приємну несподіванку ближче до вечора.",
  "Не бійся ризикувати — удача на твоєму боці!",
  "Твоя посмішка зробить день кращим не тільки тобі.",
  "Візьми паузу — відповіді прийдуть самі.",
  "Те, що ти шукаєш, вже шукає тебе.",
  "Час звернути увагу на своє здоров’я.",
  "День буде сповнений натхнення.",
  "Не ігноруй інтуїцію — вона підкаже правильне рішення.",
  "Твоя мрія ближче, ніж здається.",
];

const DailyFortune = () => {
  const [fortune, setFortune] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    setFortune(fortunes[randomIndex]);
  }, []);

  return (
    <section className="products" id="fortune">
      <h1 className="heading">
        Твоє <span>передбачення</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <div className="content">
            <h3 style={{ textAlign: "center" }}></h3>
            <p style={{ fontSize: "1.2rem",fontStye: "Verdana",textAlign: "center" }}>{fortune}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyFortune;
