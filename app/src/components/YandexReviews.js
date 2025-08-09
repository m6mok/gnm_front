import React from 'react';
import './YandexReviews.css';

function YandexReviews() {
  return (
    <section id="yandex-reviews" className="yandex-reviews-section">
      <div className="container">
        <div className="section-header">
          <h2>Отзывы наших гостей</h2>
          <div className="divider"></div>
        </div>

        <div className="yandex-reviews-widget-container">
          <div className="yandex-reviews-widget">
            <iframe
              src="https://yandex.ru/maps-reviews-widget/6665878881?comments"
              title="Отзывы о глэмпинге Наше Место на Яндекс.Картах"
            ></iframe>
            <a
              href="https://yandex.ru/maps/org/nashe_mesto/6665878881/"
              target="_blank"
              rel="noopener noreferrer"
              className="yandex-reviews-attribution"
            >
              Наше Место на карте Москвы и Московской области — Яндекс Карты
            </a>
          </div>
        </div>

        <div className="reviews-footer">
          <p>Хотите поделиться своими впечатлениями? Мы будем рады вашему отзыву!</p>
          <a
            href="https://yandex.ru/maps/org/nashe_mesto/6665878881/"
            target="_blank"
            rel="noopener noreferrer"
            className="view-more-reviews-btn"
          >
            Оставить отзыв на Яндекс.Картах
          </a>
        </div>
      </div>
    </section>
  );
}

export default YandexReviews;
