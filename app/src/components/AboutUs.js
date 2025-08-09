import React from 'react';
import './AboutUs.css';
import aboutImage1 from '../assets/about-image1.jpg';
import aboutImage2 from '../assets/about-image2.jpg';

function AboutUs() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>Наше Место — ваш уголок гармонии с природой</h2>
          <div className="divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>Представьте себе уголок природы, где простор и тишина сплетаются в гармонию, где свежий воздух наполнен ароматом хвои и цветущих трав, где прозрачная гладь пруда отражает небо и облака словно зеркало души — это «Наше место», куда хочется возвращаться снова и снова.</p>

            <p>Здесь вы найдёте истинное воплощение комфорта и единения с природой. Деревянные домики, утопающие среди высоких сосен и стройных берёз, украшенные тёплыми лучами солнца. Окна огромные, панорамные, будто растворяющие границы между вами и окружающим миром.</p>

            <p>Приезжайте отдохнуть душой и телом! Почувствуйте ритм жизни в гармонии с природой, наслаждайтесь каждым моментом спокойствия и свободы, открывайте для себя новые впечатления и эмоции.</p>
          </div>

          <div className="about-images">
            <div className="image-container">
              <img src={aboutImage1} alt="Природа в глэмпинге Наше Место" />
            </div>
            <div className="image-container">
              <img src={aboutImage2} alt="Отдых в глэмпинге Наше Место" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
