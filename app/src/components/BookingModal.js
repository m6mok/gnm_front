import React, { useState, useEffect, useRef } from 'react';
import './BookingModal.css';

function BookingModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const modalRef = useRef();

  // Закрытие модального окна при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Блокировка скролла страницы при открытом модальном окне
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Форматирование номера телефона
  const formatPhoneNumber = (value) => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength < 4) return `+7 (${phoneNumber}`;
    if (phoneNumberLength < 7) return `+7 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    if (phoneNumberLength < 10) return `+7 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
    return `+7 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 8)}-${phoneNumber.slice(8, 10)}`;
  };

  const handlePhoneChange = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhone(formattedPhoneNumber);
    setPhoneError('');
  };

  const validateForm = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError('Пожалуйста, введите ваше имя');
      isValid = false;
    } else {
      setNameError('');
    }

    const phoneDigits = phone.replace(/[^\d]/g, '');
    if (!phone || phoneDigits.length < 10) {
      setPhoneError('Пожалуйста, введите корректный номер телефона');
      isValid = false;
    } else {
      setPhoneError('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Имитация отправки данных на сервер
      setTimeout(() => {
        console.log('Данные для отправки:', { name, phone, additionalInfo });
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Сброс формы через 3 секунды после успешной отправки
        setTimeout(() => {
          setName('');
          setPhone('');
          setAdditionalInfo('');
          setIsSubmitted(false);
          onClose();
        }, 3000);
      }, 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container" ref={modalRef}>
        <button className="modal-close-btn" onClick={onClose}>×</button>

        {isSubmitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3>Заявка отправлена!</h3>
            <p>Мы свяжемся с вами в ближайшее время</p>
          </div>
        ) : (
          <>
            <h2>Забронировать домик</h2>
            <p className="modal-subtitle">Оставьте свои контактные данные, и мы перезвоним вам для уточнения деталей</p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Ваше имя <span className="required">*</span></label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setNameError(''); }}
                  placeholder="Иван Иванов"
                  className={nameError ? 'error' : ''}
                />
                {nameError && <div className="error-message">{nameError}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Номер телефона <span className="required">*</span></label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+7 (___) ___-__-__"
                  className={phoneError ? 'error' : ''}
                />
                {phoneError && <div className="error-message">{phoneError}</div>}
              </div>

              <div className="form-group">
                <label htmlFor="additionalInfo">Дополнительная информация</label>
                <textarea
                  id="additionalInfo"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  placeholder="Укажите предпочтительное время звонка, объекты бронирования, даты бронирования, количество гостей и другие пожелания"
                  rows="4"
                ></textarea>
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
              </button>
            </form>

            <p className="privacy-notice">
              Нажимая на кнопку, вы соглашаетесь с нашей<br/><a href="#privacy">политикой конфиденциальности</a>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default BookingModal;
