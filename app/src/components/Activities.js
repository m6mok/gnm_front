import React from 'react';
import './Activities.css';
import activityImage1 from '../assets/activity1.jpg';
import activityImage2 from '../assets/activity2.jpg';
import activityImage3 from '../assets/activity3.jpg';
import activityImage4 from '../assets/activity4.jpg';

function Activities() {
  return (
    <section id="activities" className="activities-section">
      <div className="container">
        <div className="section-header">
          <h2>Активности и развлечения</h2>
          <div className="divider"></div>
        </div>

        <div className="activities-grid">
          <div className="activity-card">
            <div className="activity-image">
              <img src={activityImage1} alt="Завтрак на террасе" />
            </div>
            <h3>Завтрак на террасе</h3>
            <p>Утром вы сможете насладиться ароматным кофе, наблюдая, как солнце медленно поднимается над горизонтом.</p>
          </div>

          <div className="activity-card">
            <div className="activity-image">
              <img src={activityImage2} alt="Барбекю на открытом огне" />
            </div>
            <h3>Барбекю на открытом огне</h3>
            <p>Мангал ждёт своего мастера кулинарии, чтобы насладиться вкусом жареного мяса и свежими овощами.</p>
          </div>

          <div className="activity-card">
            <div className="activity-image">
              <img src={activityImage3} alt="Сеновал и качели" />
            </div>
            <h3>Сеновал и качели</h3>
            <p>Уникальная атмосфера сеновала и огромной качели подарят незабываемые впечатления и настоящую радость.</p>
          </div>

          <div className="activity-card">
            <div className="activity-image">
              <img src={activityImage4} alt="Отдых у костра" />
            </div>
            <h3>Отдых у костра</h3>
            <p>Вечерние беседы у костра под звездным небом — идеальное завершение дня на природе.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Activities;
