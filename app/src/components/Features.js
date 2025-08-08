import React from 'react';
import './Features.css';
import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';
import feature3 from '../assets/feature3.jpg';

function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="section-title">Ключевые возможности</h2>
        <p className="section-subtitle">Наш продукт предлагает множество функций, разработанных для вашего удобства</p>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-image">
              <img src={feature1} alt="Функция 1" />
            </div>
            <h3>Интуитивный интерфейс</h3>
            <p>Простой и понятный интерфейс позволяет быстро освоить все функции продукта без обучения.</p>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src={feature2} alt="Функция 2" />
            </div>
            <h3>Высокая производительность</h3>
            <p>Оптимизированные алгоритмы обеспечивают молниеносную скорость работы даже с большими объемами данных.</p>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src={feature3} alt="Функция 3" />
            </div>
            <h3>Безопасность данных</h3>
            <p>Многоуровневая система защиты гарантирует полную безопасность ваших данных в любой ситуации.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
