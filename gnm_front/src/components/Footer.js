import React from 'react';
import './Footer.css';
import footerLogo from '../assets/logo.jpg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={footerLogo} alt="Компания" />
            <p>Мы создаем инновационные решения для улучшения вашего бизнеса</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>О компании</h4>
              <ul>
                <li><a href="#about">О нас</a></li>
                <li><a href="#team">Команда</a></li>
                <li><a href="#careers">Карьера</a></li>
                <li><a href="#press">Пресса</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Продукты</h4>
              <ul>
                <li><a href="#product1">Продукт 1</a></li>
                <li><a href="#product2">Продукт 2</a></li>
                <li><a href="#product3">Продукт 3</a></li>
                <li><a href="#pricing">Цены</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Поддержка</h4>
              <ul>
                <li><a href="#help">Центр помощи</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contact">Контакты</a></li>
                <li><a href="#tutorials">Руководства</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2023 Название компании. Все права защищены.</p>
          <div className="footer-social">
            <a href="#facebook"><i className="icon-facebook"></i></a>
            <a href="#twitter"><i className="icon-twitter"></i></a>
            <a href="#instagram"><i className="icon-instagram"></i></a>
            <a href="#linkedin"><i className="icon-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
