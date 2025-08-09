import React from 'react';
import './RussianBath.css';
import bathImage1 from '../assets/bath1.jpg';
import bathImage2 from '../assets/bath2.jpg';
import bathImage3 from '../assets/bath3.jpg';

function RussianBath() {
  return (
    <section id="bath" className="bath-section">
      <div className="container">
        <div className="section-header">
          <h2>«Правильная баня» — сердце отдыха</h2>
          <div className="divider"></div>
        </div>

        <div className="bath-content">
          <div className="bath-gallery">
            <div className="gallery-item main">
              <img src={bathImage1} alt="Русская баня" />
            </div>
            <div className="gallery-item secondary">
              <img src={bathImage2} alt="Парение в бане" />
            </div>
            <div className="gallery-item secondary">
              <img src={bathImage3} alt="Горячий чан" />
            </div>
          </div>

          <div className="bath-info">
            <p>Настоящим сердцем отдыха является наша знаменитая Русская баня — «Правильная баня», славящаяся своими оздоровительными процедурами и незабываемым ощущением чистоты тела и духа.</p>

            <div className="bath-features">
              <div className="feature">
                <h4>Программы парения на любой вкус</h4>
                <p>Для новичков — мягкое и бережное введение в банные процедуры, для гурманов — настоящие мастер-классы по искусству пара.</p>
              </div>

              <div className="feature">
                <h4>Уникальный выбор веников</h4>
                <p>Дуб, берёза, клён, липа — каждый с особым ароматом и эффектом.</p>
              </div>

              <div className="feature">
                <h4>Горячий чан с пихтой и грейпфрутом</h4>
                <p>Подарит заряд бодрости и свежести телу и душе.</p>
              </div>

              <div className="feature">
                <h4>Опытный пармейстер</h4>
                <p>Заботливо проведёт вас через ритуалы русской бани, помогая раскрыть её целительные свойства.</p>
              </div>
            </div>

            <button className="book-bath-btn">Записаться на парение</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RussianBath;
