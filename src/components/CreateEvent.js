import React from 'react';
import profile from '../images/profile.png';
import calendar from '../images/calendar.svg';
import time from '../images/time.svg';
import location from '../images/location.svg';
import bonus from '../images/bonus.svg';
import { poems } from '../data/constants';

function CreateEvent({isNatureChosen, isCityChosen, isPeopleChosen, isAnimalsChosen}) {
  const [selectedValue, setSelectedValue] = React.useState(false);
 
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelectedValue({
      [name]: value,
    }
    );
  };

  const poem = poems.find(item => item.category === selectedValue.category);

  return (
    <>
    <header className="header">
    <a href="./index.html" className="header__back"></a>
    <select name="select-city" className="header__select-city header__select-city_type_profile">
      <option value="Москва">Москва</option>
      <option value="Питер" defaultValue>Санкт-Петербург</option>
      <option value="Краснодар">Краснодар</option>
    </select>
    <img src={profile} alt="Аватарка" className="header__avatar" />
    </header>
    <main className="main">
    <section className="initiation section_type_narrow">
      <button type="button" className="initiation__add-image"></button>
      <form className="initiation__form">
        <nav className="initiation__atribute">
          <button type="button" className="initiation__atribute-button"><img src={calendar}
              alt="Календарь" /></button>
          <button type="button" className="initiation__atribute-button"><img src={time} alt="Время" /></button>
          <button type="button" className="initiation__atribute-button"><img src={location}
              alt="Позиция" /></button>
          <button type="button" className="initiation__atribute-button"><img src={bonus} alt="Бонусы" /></button>
        </nav>
        {isNatureChosen && 
        <select name="category" className="initiation__category" onChange={handleSelectChange}>
          <option>Уборка снега</option>
          <option>Уборка листьев</option>
          <option>Уборка леса</option>
          <option>Уборка клумб</option>
          <option>Посадка цветов</option>
          <option>Посадка деревьев</option>
        </select>}
        {isCityChosen && 
        <select name="category" className="initiation__category" onChange={handleSelectChange}>
          <option>Победить гололед</option>
          <option>Победить вонючие кучи</option>
          <option>Полезная сортировка</option>
          <option>Здрасьте покрасьте</option>
          <option>Детская туса</option>
          <option>Старушка скамейка</option>
          <option>Ветхий тротуар</option>
          <option>Банька по белому</option>
          <option>Толкаем МАЗ</option>
          <option>Погасли лампочки</option>
          <option>Чистим грязевые реки</option>
          <option>Сушим дворовые моря</option>
          <option>Уборка города</option>
          <option>Посыпать дорожки песком</option>
        </select>}
        {isPeopleChosen && 
        <select name="category" className="initiation__category" onChange={handleSelectChange}>
          <option>Соревнуемся бабулями</option>
          <option>Едем в дом к пенсионерам</option>
          <option>Не болейте малыши</option>
          <option>Детей чужих не бывает</option>
          <option>Благотворительность</option>
          <option>Разыскиваем мецената</option>
          <option>Помоги соседу</option>
        </select>}
        {isAnimalsChosen &&
                <select name="category" className="initiation__category" onChange={handleSelectChange}>
                <option>Покормить собаку</option>
                <option>Приютить котенка</option>
                <option>Передержка собаки</option>
                <option>Покормить птиц</option>
                <option>Смастерить скворечник</option>
              </select>}
        <article className=" initiation__text">
          {selectedValue ? poem.text : 
          isNatureChosen && `Белая берёза под моим окном\nПринакрылась снегом, точно серебром.\nНа пушистых ветках снежною каймой\nРаспустились кисти белой бахромой.` || 
          isCityChosen && `Однажды в нашем городе \rСлучился гололёд: \rМашина не проедет, \nАвтобус не пройдёт. \nЕсли кто-то побежит - \nПоскользнётся и лежит. \nНельзя ни шагу сделать, \nЧтоб тут же не упасть. \nИ людям на работу \nНу просто не попасть. \nИ замерли заводы, \nИ не гудят станки \nИз-за того, что улицы \nНе улицы – катки.` ||
          isPeopleChosen && `Помогаю бабушке\nЯ уже большой\nУлыбнулась бабушка \nИ стала молодой\n- Молодая бабушка! \nЛюди говорят\nЯ за нашу бабушк\nОчень рад.\nЯ, ребята, бабушке\nНе грублю,\nПотому что бабушку\nЯ люблю.\nБудем нашим бабушкам\nПомогать с тобой!\n- Улыбайся, бабушка,\nВсегда будь молодой!` ||
          isAnimalsChosen && `Собака сторожила гладиолусы,\nМаячило ей счастье впереди,\nИ ветер на собаке гладил волосы\nИ ей шептал: «С надеждой вдаль гляди!`}
        </article>
        <button type="submit" className="initiation__create">Создать меропритие</button>
      </form>
    </section>
    <ul className="footer__list">
        <li className="footer__information">FAQ</li>
        <li className="footer__information">Партнеры</li>
        <li className="footer__information">Связаться</li>
    </ul>
  </main>
  </>
  )
}

export default CreateEvent;

