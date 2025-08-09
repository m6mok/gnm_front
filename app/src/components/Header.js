import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../assets/logo.jpg';

function Header({ openModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Наше Место" />
          <span>Наше Место</span>
        </div>

        <div className={`mobile-menu-btn ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>О нас</a></li>
            <li><a href="#glamping" onClick={() => setMenuOpen(false)}>Глэмпинг</a></li>
            <li><a href="#bath" onClick={() => setMenuOpen(false)}>Баня</a></li>
            <li><a href="#features" onClick={() => setMenuOpen(false)}>Особенности</a></li>
            <li><a href="#activities" onClick={() => setMenuOpen(false)}>Активности</a></li>
            <li><a href="#yandex-reviews" onClick={() => setMenuOpen(false)}>Отзывы</a></li>
          </ul>
        </nav>

        <button className="book-btn" onClick={openModal}>Забронировать</button>
      </div>
    </header>
  );
}

export default Header;
