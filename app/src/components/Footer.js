import React from 'react';
import './Footer.css';
import footerLogo from '../assets/logo.jpg';
import VkIcon from './icons/VkIcon';
import TelegramIcon from './icons/TelegramIcon';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">
              <img src={footerLogo} alt="Наше Место" />
              <span>Наше Место</span>
            </div>
            <p>Глэмпинг и русская баня «Правильная баня» в 120 км от Москвы. 3 уютных домика, 40 га природы, незабываемые впечатления!</p>
            <div className="footer-social">
              <a href="https://vk.com/ppnm1" aria-label="Вконтакте" target="_blank" rel="noopener noreferrer">
                <VkIcon />
              </a>
              <a href="https://t.me/banya_nm" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                <TelegramIcon />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Контакты</h4>
              <ul className="contact-info">
                <li><i className="icon-location"></i> Московская область, городской округ Кашира, вблизи п. Большое Руново</li>
                <li><i className="icon-phone"></i> <a href='tel:+79257153575'>+7 (925) 715-35-75</a></li>
                <li><i className="icon-email"></i> <a href='mailto:picnik-park@yandex.ru'>picnik-park@yandex.ru</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 ИП Дементьев А.В.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
