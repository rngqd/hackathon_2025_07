import React from "react";
import result1 from '../images/result1.png';
import result2 from '../images/result2.jpg';
import result3 from '../images/result3.png';

function Results() {
  return (
      <main className="main">
        <section className="section event section_type_narrow">
          <div className="event__container">
            <h1 className="event__title">Голо-голодед</h1>
            <div className="event__info-about">
              <span className="event__place">Москва, ул. Седова</span>
              <span className="event__date">15.12.2020</span>
            </div>
            <img
              src={result1}
              alt="гололёд"
              className="event__image"
            />
            <article className="event__text">
              Можно собираться в школы, <br />
              Можно ехать на завод! <br />
              Потому что стал не голым <br />
              Этот голо-гололёд! <br />
              В этот вечер все газеты <br />
              Напечатали портреты <br />
              Иванова и ребят. <br />
              Председатель горсовета <br />
              Целовал их всех подряд, <br />
              Обнимал, благодарил <br />
              И слонёнка подарил. <br />
              Вот, ребята, он каков, <br />
              Академик Иванов. <br />
              Он, по-моему, ребята, <br />
              Выше всех похвальных слов!
            </article>
            <div className="event__links">
              <a href="#" className="event__member">
                Участники
              </a>
              <a href="#" className="event__more-info">
                Подробнее
              </a>
            </div>
            <a href="./choose.html" className="event__finde-closest">
              Найти похожее мероприятие
            </a>
          </div>

          <div className="event__container">
            <h1 className="event__title">Обновили старый дом</h1>
            <div className="event__info-about">
              <p className="event__place">Москва, ул. Садовая</p>
              <p className="event__date">15.12.2020</p>
            </div>
            <img
              src={result2}
              alt="Старый дом"
              className="event__image"
            />
            <article className="event__text">
              Маляры пришли втроём, <br />
              Обновили старый дом: <br />
              Был облезлый, скучный, голый, <br />
              Стал нарядный и весёлый! <br />
              Все ребята со двора <br />
              Малярам кричат: «Ура!»
            </article>
            <div className="event__links">
              <a href="#" className="event__member">
                Участники
              </a>
              <a href="#" className="event__more-info">
                Подробнее
              </a>
            </div>
            <a href="./choose.html" className="event__finde-closest">
              Найти похожее мероприятие
            </a>
          </div>

          <div className="event__container">
            <h1 className="event__title">Новые парадные ворота</h1>
            <div className="event__info-about">
              <p className="event__place">Москва, ул. Седова</p>
              <p className="event__date">15.12.2020</p>
            </div>
            <img src={result3} alt="Ворота" className="event__image" />
            <article className="event__text">
              В нашем доме с давних пор<br />
              Чкалов жил Валерий.<br />
              Выходил он к нам во двор<br />
              Вот из этой двери.<br />
              Поглядев на небосвод,<br />
              Подзывал он сына <br />
              И шагал с ним до ворот, <br />
              Где ждала машина. <br />
              Долго будет эта дверь <br />
              Гордостью квартала. <br />
              Наша улица теперь <br />
              Чкаловскою стала. <br />
              Дети нашего двора, <br />
              Моряки, пилоты, <br />
              И для вас придет пора <br />
              Боевой работы. <br />
              И, взлетая на простор <br />
              Или волны роя, <br />
              Вы припомните тот двор, <br />
              Где живут герои!
            </article>
            <div className="event__links">
              <a href="#" className="event__member">
                Участники
              </a>
              <a href="#" className="event__more-info">
                Подробнее
              </a>
            </div>
            <a href="./choose.html" className="event__finde-closest">
              Найти похожее мероприятие
            </a>
          </div>
        </section>
      </main>
  );
}

export default Results;
