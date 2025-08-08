import React from 'react';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Компания" />
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#features">Возможности</a></li>
            <li><a href="#benefits">Преимущества</a></li>
            <li><a href="#testimonials">Отзывы</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </nav>
        <button className="cta-button">Попробовать бесплатно</button>
      </div>
    </header>
  );
}

export default Header;
