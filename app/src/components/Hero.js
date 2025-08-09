import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.jpg';

function Hero({ openModal }) {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Наше Место: здесь отдых дышит свободой</h1>
        <p>Глэмпинг и русская баня в окружении 40 га природы. Всего 120 км от Москвы.</p>
        <div className="hero-buttons">
          <button className="primary-btn" onClick={openModal}>Забронировать</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Глэмпинг Наше Место" />
      </div>
    </section>
  );
}

export default Hero;
