import React from 'react';
import choose1 from '../images/choose1.png';
import choose2 from '../images/choose2.png';
import choose3 from '../images/choose3.png';

function ActiveEvents() {
  return (
      <main className="main">
        <section className="section enden-event section_type_narrow">
          <div className="enden-event__container">
            <h1 className="event__title">Делаем скворечники</h1>
            <div className="event__info-about">
              <span className="event__place">Москва, ул. Седова</span>
              <span className="event__date">15.12.2020</span>
            </div>
            <img
              src={choose1}
              alt="гололёд"
              className="event__image"
            />
            <article className="event__text">
              Покормите птиц зимой!<br />
              Пусть со всех концов<br />
              К вам слетятся, как домой,<br />
              Стайки на крыльцо<br />
              Сколько гибнет их - не счесть.<br />
              Видеть тяжело.<br />
              А ведь в нашем сердце есть<br />
              И для птиц тепло.<br />
              Приучите птиц к морозу<br />
              К своему окну,<br />
              Чтоб без песен не пришлось<br />
              Нам встречать весну.
            </article>
            <div className="event__links">
              <a href="#" className="event__join">
                Пойду
              </a>
              <a href="#" className="event__more-info">
                Подробнее
              </a>
            </div>
          </div>

          <div className="enden-event__container">
            <h1 className="event__title">Сушим дворовые моря</h1>
            <div className="event__info-about">
              <p className="event__place">Москва, ул. Садовая</p>
              <p className="event__date">15.12.2020</p>
            </div>
            <img
              src={choose2}
              alt="Старый дом"
              className="event__image"
            />
            <article className="event__text">
              Что такое лужа? Лужа — это море!<br />
              В ней кусочек солнца, небо, облака.<br />
              И сегодня мама пусть со мной не спорит,<br />
              Мы уходим в плаванье к далёким берегам.<br />
              Но смеялись папы над игрою нашей,<br />
              Рассердились мамы, увели нас мыть.<br />
              И пришла с метлою дворник тётя Паша,<br />
              Чтобы наше, наше море в люке утопить.<br />
              Только по секрету вам скажу, ребята,<br />
              В дальнюю разведку уходил я сам.<br />
              Во дворе напротив, прямо у ограды,<br />
              Ждёт нас, неоткрытый, целый Тихий океан.
            </article>
            <div className="event__links">
              <a href="#" className="event__join">
                Пойду
              </a>
              <a href="#" className="event__more-info">
                Подробнее
              </a>
            </div>
          </div>

          <div className="enden-event__container">
            <h1 className="event__title">Здрасьте покрасьте</h1>
            <div className="event__info-about">
              <p className="event__place">Москва, ул. Седова</p>
              <p className="event__date">15.12.2020</p>
            </div>
            <img
              src={choose3}
              alt="Ворота"
              className="event__image"
            />
            <article className="event__text">
              Я сразу смазал карту будня,<br />
              плеснувши краску из стакана;<br />
              я показал на блюде студня<br />
              косые скулы океана.<br />
              На чешуе жестяной рыбы<br />
              прочёл я зовы новых губ.<br />
              А вы ноктюрн сыграть могли бы<br />
              на флейте водосточных труб?
            </article>
            <div className="event__links">
              <a href="#" className="event__join">
                Пойду
              </a>
              <a href="#" className="event__more-info">
                Подробнее
              </a>
            </div>
          </div>
        </section>
      </main>
  );
}

export default ActiveEvents;
