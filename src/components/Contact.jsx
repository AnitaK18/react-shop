import React, { useState } from "react";
import ContactSvg from '../assets/images/contact-img.svg';
import { GoogleMap } from './GoogleMap';

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !message.trim()) {
      alert("Будь ласка, заповніть всі поля.");
      return;
    }

    console.log("Email:", email);
    console.log("Message:", message);

    setSubmitted(true);
    setEmail("");
    setMessage("");
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        Contact <span>us</span>
      </h1>

      <div className="row">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            className="box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Your message..."
            className="box"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <button type="submit" className="btn">
            Send message
          </button>
          {submitted && (
            <p
              style={{
                color: "var(--pink)",
                marginTop: "1rem",
                fontSize: "1.5rem",
              }}
            >
              Дякуємо за звернення!
            </p>
          )}
        </form>

        <div className="image">
          <img src={ContactSvg} alt="contact" />
        </div>
      </div>

      <div className="map-section">
        <h2 className="map-heading">
          Як <span>нас знайти</span>
        </h2>
        <div className="map-container">
          <GoogleMap />
        </div>
      </div>
    </section>
  );
};

export default Contact;
