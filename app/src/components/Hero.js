import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero-image.jpg';

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Откройте новые возможности с нашим продуктом</h1>
          <p>Инновационное решение, которое изменит ваш подход к работе и повысит производительность.</p>
          <button className="primary-button">Начать сейчас</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Наш продукт" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
