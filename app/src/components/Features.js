import React from 'react';
import './Features.css';
import featureImage1 from '../assets/feature1.jpg';
import featureImage2 from '../assets/feature2.jpg';
import featureImage3 from '../assets/feature3.jpg';

function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <h2>Особенности нашего места</h2>
          <div className="divider"></div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-image">
              <img src={featureImage1} alt="Территория 40 га" />
            </div>
            <div className="feature-content">
              <h3>40 гектаров природы</h3>
              <p>Огромная территория для прогулок, отдыха и единения с природой. Лес, пруд и свежий воздух в вашем распоряжении.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src={featureImage2} alt="Расстояние от Москвы" />
            </div>
            <div className="feature-content">
              <h3>Всего 120 км от Москвы</h3>
              <p>Идеальное расстояние для отдыха на выходных — достаточно далеко от городской суеты, но легко добраться.</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="feature-image">
              <img src={featureImage3} alt="Три домика" />
            </div>
            <div className="feature-content">
              <h3>Три уютных домика</h3>
              <p>Каждый домик оборудован всем необходимым для комфортного отдыха и уединения. Идеально для семьи или компании друзей.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
