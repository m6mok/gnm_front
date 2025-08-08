import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Связаться с нами</h2>
        <p className="section-subtitle">Остались вопросы? Заполните форму ниже, и мы свяжемся с вами</p>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-item">
              <i className="icon-location"></i>
              <div>
                <h4>Адрес</h4>
                <p>ул. Примерная, 123, Москва, Россия</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="icon-phone"></i>
              <div>
                <h4>Телефон</h4>
                <p>+7 (123) 456-78-90</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="icon-email"></i>
              <div>
                <h4>Email</h4>
                <p>info@example.com</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Ваше имя" required />
            </div>

            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>

            <div className="form-group">
              <input type="text" placeholder="Тема" />
            </div>

            <div className="form-group">
              <textarea placeholder="Ваше сообщение" rows="5" required></textarea>
            </div>

            <button type="submit" className="submit-button">Отправить</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
