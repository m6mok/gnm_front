import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Glamping from './components/Glamping';
import RussianBath from './components/RussianBath';
import Features from './components/Features';
import Activities from './components/Activities';
// import Testimonials from './components/Testimonials'; // Закомментируем старый компонент
import YandexReviews from './components/YandexReviews'; // Импортируем новый компонент
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header openModal={openModal} />
      <Hero openModal={openModal} />
      <AboutUs />
      <Glamping />
      <RussianBath />
      <Features />
      <Activities />
      {/* <Testimonials /> */}
      <YandexReviews /> {/* Заменяем на новый компонент */}
      <CallToAction openModal={openModal} />
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
