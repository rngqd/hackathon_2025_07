import React from 'react';
import profile from '../images/Profile.png';

function CreateEvent() {
  return (
    <>
    <header className="header">
    <a href="./index.html" className="header__back"></a>
    <select name="select-city" className="header__select-city header__select-city_type_profile">
      <option value="Москва">Москва</option>
      <option value="Питер" selected>Питер</option>
      <option value="Краснодар">Краснодар</option>
    </select>
    <img src={profile} alt="Аватарка" className="header__avatar" />
    </header>
    <main className="main">
    <section className="initiation section_type_narrow">
      <button type="button" className="initiation__add-image"></button>
      <form className="initiation__form">
        <nav className="initiation__atribute">
          <button type="button" className="initiation__atribute-button"><img src="./images/calendar.svg"
              alt="Календарь" /></button>
          <button type="button" className="initiation__atribute-button"><img src="./images/time.svg" alt="Время" /></button>
          <button type="button" className="initiation__atribute-button"><img src="./images/Location.svg"
              alt="Позиция" /></button>
          <button type="button" className="initiation__atribute-button"><img src="./images/bonus.svg" alt="Бонусы" /></button>
        </nav>
        <select name="select__category" className="initiation__category">
          <option value="Уборка">Уборка</option>
          <option value="Покраска" selected>Покраска</option>
          <option value="Помощь">Помощь</option>
        </select>
        <article className=" initiation__text">
          Из окошек мусор не бросайте,<br />
          Территорию не засоряйте!<br />
          Ведь по тротуарам люди ходят,<br />
          Под ногами мусор ваш находят.<br />
          Мусор по округе разлетится,<br />
          Чистый город в грязный превратится.
        </article>
        <button type="submit" className="initiation__create">Создать меропрития</button>
      </form>
    </section>
  </main>
  <footer className="footer">
    <div className="footer__container">
      <p className="footer__text"> Copyright © 2019</p>
      <nav className="footer__socials">
        <a className className="footer__social" href="#"> <img src="./images/Facebook.svg" alt="Фейсбук" /></a>
        <a className className="footer__social" href="#"> <img src="./images/Linkedin.svg" alt="Линкд" /></a>
        <a className className="footer__social" href="#"> <img src="./images/Google.svg" alt="Гугл" /></a>
      </nav>
    </div>
  </footer>
  </>
  )
}

export default CreateEvent;