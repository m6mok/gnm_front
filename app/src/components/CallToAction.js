import React from 'react';
import './CallToAction.css';
import ctaImage from '../assets/cta-image.jpg';

function CallToAction({ openModal }) {
  return (
    <section className="cta-section">
      <div className="cta-overlay"></div>
      <div className="container">
        <div className="cta-content">
          <h2>Добро пожаловать в наше место — место вашего отдыха и вдохновения</h2>
          <p>Забронируйте свой домик уже сегодня и подарите себе незабываемый отдых в гармонии с природой.</p>
          <div className="cta-buttons">
            <button className="cta-primary-btn" onClick={openModal}>Заказать звонок</button>
          </div>
        </div>
      </div>
      <div className="cta-image">
        <img src={ctaImage} alt="Наше место" />
      </div>
    </section>
  );
}

export default CallToAction;
