import React from 'react';
import './Glamping.css';
import glampingImage1 from '../assets/glamping1.jpg';
import glampingImage2 from '../assets/glamping2.jpg';
import glampingImage3 from '../assets/glamping3.jpg';

function Glamping() {
  return (
    <section id="glamping" className="glamping-section">
      <div className="container">
        <div className="section-header">
          <h2>Уютные домики глэмпинга</h2>
          <div className="divider"></div>
        </div>

        <div className="glamping-content">
          <div className="glamping-info">
            <p>Отдых начинается уже в вашем новом временном убежище: внутри вас ждёт уютная спальня с огромной кроватью и мягким диваном, создающим атмосферу тепла и покоя.</p>

            <div className="glamping-features">
              <div className="feature">
                <i className="icon-kitchen"></i>
                <h4>Кухонный уголок</h4>
                <p>Современная техника, посуда и разнообразные напитки, включая кофемашину с капсулами.</p>
              </div>

              <div className="feature">
                <i className="icon-comfort"></i>
                <h4>Комфорт в любое время года</h4>
                <p>Тёплые полы и кондиционер создают ощущение домашнего уюта даже зимой.</p>
              </div>

              <div className="feature">
                <i className="icon-terrace"></i>
                <h4>Просторная терраса</h4>
                <p>Деревянный стол и удобные стулья для завтраков на свежем воздухе и вечерних бесед.</p>
              </div>
            </div>
          </div>

          <div className="glamping-gallery">
            <div className="gallery-grid">
              <div className="gallery-item large">
                <img src={glampingImage1} alt="Интерьер домика" />
              </div>
              <div className="gallery-item">
                <img src={glampingImage2} alt="Терраса домика" />
              </div>
              <div className="gallery-item">
                <img src={glampingImage3} alt="Вид из домика" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Glamping;
