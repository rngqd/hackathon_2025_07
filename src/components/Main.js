import React from 'react';
import search from '../images/search.svg';
import mainSlider1 from '../images/main-slider-1.png';
import mainSlider2 from '../images/main-slider-2.png';
import mainSlider3 from '../images/main-slider-3.png';
import mainSlider4 from '../images/main-slider-4.png';
import mainSlider5 from '../images/main-slider-5.png';
import result1 from '../images/result1.png';
import result2 from '../images/result2.jpg';
import result3 from '../images/result3.png';

function Main({handleNatureClick}) {

  return (
    <>
    <header className="header">
    <a href="./index.html" className="header__logo"></a> 
    <select name="select-city" className="header__select-city"> 
      <option value="Москва">Москва</option>
      <option value="Питер" defaultValue>Санкт-Петербург</option>
      <option value="Краснодар">Краснодар</option>
    </select>
    <button type="button" className="header__search"><img src={search} alt="Поиск" /></button>
    <a href="./initiation.html" className="header__login">Вход</a>
  </header>
    <main className="main">
    <section className="about section">
      <div className="about__container">
        <div className="about__item">
          <h1 className="about__title">помогай животным</h1>
          <p className="about__subtitle">Мир держится на добрых людях.<br />
            Не на агрессии и зле.<br />
            И если доброты не будет,<br />
            То ничего не будет на земле.</p>
          <img src={mainSlider1} alt="" className="about__image" />
        </div>
        <div className="about__item">
          <h1 className="about__title">ДЕЛАЙ ГОРОД ЛУЧШЕ </h1>
          <p className="about__subtitle">Быть может, это всё наивно.<br />
            Но вижу я в который раз,<br />
            Как над землёй бушуют ливни,<br />
            Чтоб смыть скопившуюся грязь.</p>
          <img src={mainSlider2} alt="" className="about__image" />
        </div>
        <div className="about__item">
          <h1 className="about__title">ЗАРАБАТЫВАЙ БАЛЛЫ</h1>
          <p className="about__subtitle">Мир держится на милосердьи,<br />
            А не на выгоде и лжи.<br />
            Никто из нас не минёт смерти,<br />
            А потому добро творить спеши.</p>
          <img src={mainSlider3} alt="" className="about__image" />
        </div>
        <div className="about__item">
          <h1 className="about__title">СОЗДАВАЙ ЗАДАНИЯ СТИХАМИ КЛАССИКОВ</h1>
          <p className="about__subtitle">Так пусть в нас совесть не убудет<br />
            И правда не сорвётся вниз…<br />
            Мир держится на мудрых людях,<br />
            Как держится при солнце жизнь.</p>
          <img src={mainSlider4} alt="" className="about__image" />
        </div>
        <div className="about__item">
          <h1 className="about__title">ПОЛУЧАЙ ПОДАРКИ </h1>
          <p className="about__subtitle">Все держится на состраданьи,<br />
            А не на важности пустой.<br />
            Вот кто-то свет потёмкам дарит,<br />
            Чтоб озарить жизнь красотой.</p>
          <img src={mainSlider5} alt="" className="about__image" />
        </div>
      </div>
      <button type="button" className="about__add-initiation">Активные заявки</button>
    </section>
    <section className="create-initiation section section_type_narrow">
      <h2 className="create-initiation__title title">Создать заявку</h2>
      <p className="create-initiation__subtitle subtitle">Выбери категорию, чтобы создать мероприятие</p>
      <div className="create-initiation__container">
        <button className="create-initiation__add" onClick={handleNatureClick}>Природа</button>
        <button className="create-initiation__add">Город</button>
        <button className="create-initiation__add">Люди</button>
        <button className="create-initiation__add">Животные</button>
      </div>
    </section>

    <section className="result section section_type_narrow">
      <h2 className="result__title title">Результаты</h2>
      <p className="result__subtitle subtitle">Посмотри, каких результатов мы достигли вместе.</p>
      <a href="./result.html">
      <div className="result__gallery">
        <img src={result1} alt="#" className="result__picture" />
        <img src={result2} alt="#" className="result__picture" />
        <img src={result3} alt="#" className="result__picture" />
      </div>
    </a>
    </section>
    <section className="contact section section_type_narrow">
      <h2 className="contact__title title">Будь на связи</h2>
      <p className="contact__subtitle subtitle">Получай оповещения о новых событиях и уведомления о своих мероприятиях.</p>
      <form className="contact__form">
        <input type="email" className="contact__email" placeholder="Почта" name="email" />
        <button className="contact__button">Подписаться</button>
      </form>
    </section>
    <ul className="footer__list">
      <li className="footer__information">О нас</li>
      <li className="footer__information">Партнеры</li>
      <li className="footer__information">Связаться</li>
    </ul>
  </main>
  </>
  )
}

export default Main;