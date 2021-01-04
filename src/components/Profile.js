import React from 'react';
import message from '../images/message.svg';
import nextDate from '../images/next_date.svg';
import giftCard from '../images/gift_card.svg';
import create from '../images/create.svg';
import call from '../images/call.svg';
import add from '../images/add.svg';
import iconcCity from '../images/Icon_city.svg';
import search from '../images/search.svg';

function Profile() {
  return (
    <>
    <header className="header">
    <a href="./index.html" className="header__logo"></a>
    <div className="header__select-container">
      <img src={iconcCity} alt="Город" className="header__select-img" />
    <select name="select-city" className="header__select-city">
      <option value="Москва">Москва</option>
      <option value="Питер">Санкт-Петербург</option>
      <option value="Краснодар">Краснодар</option>
    </select>
    </div>
    <button type="button" className="header__search"><img src={search} alt="Поиск" /></button>
    <a href="./initiation.html" className="header__login">Вход</a>
  </header>
    <main className="main">
      <section className="section profile-card">
        <img src={call} alt="Телефон" className="profile-card__icon" />
        <button className="profile-card__avatar">
          <img src={add} alt="Фотография" />
        </button>
        <img src={message} alt="Сообщение" className="profile-card__icon" />
      </section>
      <section className="section section_type_narrow profile-bio">
        <h1 className="profile-bio__name">Иван Иванов</h1>
        <p className="profile-bio__rank">Активный гражданин</p>
        <p className="profile-bio__city">Москва</p>
        <div className="profile-bio__container">
          <p className="profile-bio__points">158</p>
          <span className="profile-bio__points-text">бонусов</span>
        </div>
      </section>
      <section className="section section_type_narrow action">
        <a>
          <div href="#" className="action__type">
            <img src={nextDate} alt="" />
            Запланированные мероприятия
          </div>
        </a>
        <a>
          <div href="#" className="action__type">
            <img src={nextDate} alt="" />
            Посещенные мероприятия
          </div>
        </a>
        <a>
          <div href="#" className="action__type">
            <img src={giftCard} alt="" />
            Потратить бонусы
          </div>
        </a>
        <a>
          <div href="#" className="action__type">
            <img src={create} alt="" />
            Создать мероприятие
          </div>
        </a>
      </section>
      <ul className="footer__list">
        <li className="footer__information">FAQ</li>
        <li className="footer__information">Партнеры</li>
        <li className="footer__information">Связаться</li>
    </ul>
    </main>
    </>
  );
}

export default Profile;
