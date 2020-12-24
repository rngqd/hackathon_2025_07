import React from 'react';

function Main() {
  return (
    <>
    <header className="header">
    <a href="./index.html" className="header__logo"></a> 
    <select name="select-city" className="header__select-city"> 
      <option value="Москва">Москва</option>
      <option value="Питер" selected>Питер</option>
      <option value="Краснодар">Краснодар</option>
    </select>
    <button type="button" className="header__search"><img src="./images/search.svg" alt="Поиск" /></button>
    <a href="./initiation.html" className="header__login">Вход</a>
  </header>
    {/* <main class="main">
    <section class="about section">
      <div class="about__container">
        <div class="about__item">
          <h1 class="about__title">помогай животным</h1>
          <p class="about__subtitle">Мир держится на добрых людях.<br />
            Не на агрессии и зле.<br />
            И если доброты не будет,<br />
            То ничего не будет на земле.</p>
          <img src="./images/main-slider-1.png" alt="" class="about__image" />
        </div>
        <div class="about__item">
          <h1 class="about__title">ДЕЛАЙ ГОРОД ЛУЧШЕ </h1>
          <p class="about__subtitle">Быть может, это всё наивно.<br>
            Но вижу я в который раз,<br />
            Как над землёй бушуют ливни,<br />
            Чтоб смыть скопившуюся грязь.</p>
          <img src="./images/main-slider-2.png" alt="" class="about__image" />
        </div>
        <div class="about__item">
          <h1 class="about__title">ЗАРАБАТЫВАЙ БАЛЛЫ</h1>
          <p class="about__subtitle">Мир держится на милосердьи,<br />
            А не на выгоде и лжи.<br>
            Никто из нас не минёт смерти,<br>
            А потому добро творить спеши.</p>
          <img src="./images/main-slider-3.png" alt="" class="about__image" />
        </div>
        <div class="about__item">
          <h1 class="about__title">СОЗДАВАЙ ЗАДАНИЯ СТИХАМИ КЛАССИКОВ</h1>
          <p class="about__subtitle">Так пусть в нас совесть не убудет<br />
            И правда не сорвётся вниз…<br />
            Мир держится на мудрых людях,<br />
            Как держится при солнце жизнь.</p>
          <img src="./images/main-slider-4.png" alt="" class="about__image" />
        </div>
        <div class="about__item">
          <h1 class="about__title">ПОЛУЧАЙ ПОДАРКИ </h1>
          <p class="about__subtitle">Все держится на состраданьи,<br />
            А не на важности пустой.<br />
            Вот кто-то свет потёмкам дарит,<br />
            Чтоб озарить жизнь красотой.</p>
          <img src="./images/main-slider-5.png" alt="" class="about__image" />
        </div>
      </div>
      <button type="button" class="about__add-initiation">проявить инициативу</button>
    </section>
    <section class="create-initiation section section_type_narrow">
      <h2 class="create-initiation__title title">Создать инициативу</h2>
      <p class="create-initiation__subtitle subtitle">Выбери категорию, чтобы создать мероприятие</p>
      <div class="create-initiation__container">
        <button class="create-initiation__add">Природа</button>
        <button class="create-initiation__add">Город</button>
        <button class="create-initiation__add">Люди</button>
        <button class="create-initiation__add">Животные</button>
      </div>
    </section>

    <section class="result section section_type_narrow">
      <h2 class="result__title title">Результаты</h2>
      <p class="result__subtitle subtitle">Посмотри, каких результатов мы достигли вместе.</p>
      <a href="./result.html">
      <div class="result__gallery">
        <img src="./images/result1.png" alt="#" class="result__picture" />
        <img src="./images/result2.jpg" alt="#" class="result__picture" />
        <img src="./images/result3.png" alt="#" class="result__picture" />
      </div>
    </a>
    </section>
    <section class="contact section section_type_narrow">
      <h2 class="contact__title title">Будь на связи</h2>
      <p class="contact__subtitle subtitle">Получай оповещения о новых событиях и уведомления о своих мероприятиях.</p>
      <form class="contact__form">
        <input type="email" class="contact__email" placeholder="Почта" name="email">
        <button class="contact__button">Подписаться</button>
      </form>
    </section>

  </main> */}
  </>
  )
}

export default Main;