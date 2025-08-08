import React from 'react';
import './Testimonials.css';
import avatar1 from '../assets/avatar1.jpg';
import avatar2 from '../assets/avatar2.jpg';
import avatar3 from '../assets/avatar3.jpg';

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">Отзывы клиентов</h2>
        <p className="section-subtitle">Узнайте, что говорят о нас те, кто уже использует наш продукт</p>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Этот продукт существенно повысил эффективность нашей команды. Теперь мы выполняем задачи на 40% быстрее!"</p>
            </div>
            <div className="testimonial-author">
              <img src={avatar1} alt="Анна Петрова" />
              <div>
                <h4>Анна Петрова</h4>
                <p>Руководитель проектов, ABC Corp</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Интуитивный интерфейс и отличная техподдержка. Мы смогли внедрить решение за несколько дней без дополнительного обучения."</p>
            </div>
            <div className="testimonial-author">
              <img src={avatar2} alt="Иван Смирнов" />
              <div>
                <h4>Иван Смирнов</h4>
                <p>Технический директор, XYZ Tech</p>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-content">
              <p>"Благодаря этому продукту мы смогли автоматизировать рутинные процессы и сфокусироваться на действительно важных задачах."</p>
            </div>
            <div className="testimonial-author">
              <img src={avatar3} alt="Мария Иванова" />
              <div>
                <h4>Мария Иванова</h4>
                <p>CEO, StartUp Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
