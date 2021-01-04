import React from 'react';
import calendar from '../images/calendar.svg';
import time from '../images/time.svg';
import location from '../images/location.svg';
import bonus from '../images/bonus.svg';
import { poems, natureOptionsArray, cityOptionsArray, peopleOptionsArray, animalsOptionsArray } from '../data/constants';

function CreateEvent({eventType}) {
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
        {eventType === 'nature' && 
        <select name="category" className="initiation__category" onChange={handleSelectChange}>
          {natureOptionsArray.map((option) => (
            <option key={option.id}>
              {option.text}
            </option>
          ))}
        </select>}
        {eventType === 'city' && 
        <select name="category" className="initiation__category" onChange={handleSelectChange}>
          {cityOptionsArray.map((option) => (
            <option key={option.id}>
              {option.text}
            </option>
          ))}
        </select>}
        {eventType === 'people' && 
        <select name="category" className="initiation__category" onChange={handleSelectChange}>
          {peopleOptionsArray.map((option) => (
            <option key={option.id}>
              {option.text}
            </option>
          ))}
        </select>}
        {eventType === 'animals' &&
        <select name="category" className="initiation__category" onChange={handleSelectChange}>
          {animalsOptionsArray.map((option) => (
            <option key={option.id}>
              {option.text}
            </option>
          ))}
        </select>}
        <article className=" initiation__text">
          {selectedValue ? poem.text : 
          eventType === 'nature' && `Белая берёза под моим окном\nПринакрылась снегом, точно серебром.\nНа пушистых ветках снежною каймой\nРаспустились кисти белой бахромой.` || 
          eventType === 'city' && `Однажды в нашем городе \nСлучился гололёд: \nМашина не проедет, \nАвтобус не пройдёт. \nЕсли кто-то побежит - \nПоскользнётся и лежит. \nНельзя ни шагу сделать, \nЧтоб тут же не упасть. \nИ людям на работу \nНу просто не попасть. \nИ замерли заводы, \nИ не гудят станки \nИз-за того, что улицы \nНе улицы – катки.` ||
          eventType === 'people' && `Помогаю бабушке\nЯ уже большой\nУлыбнулась бабушка \nИ стала молодой\n- Молодая бабушка! \nЛюди говорят\nЯ за нашу бабушк\nОчень рад.\nЯ, ребята, бабушке\nНе грублю,\nПотому что бабушку\nЯ люблю.\nБудем нашим бабушкам\nПомогать с тобой!\n- Улыбайся, бабушка,\nВсегда будь молодой!` ||
          eventType === 'animals' && `Собака сторожила гладиолусы,\nМаячило ей счастье впереди,\nИ ветер на собаке гладил волосы\nИ ей шептал: «С надеждой вдаль гляди!`}
        </article>
        <button type="submit" className="initiation__create">Создать меропритие</button>
      </form>
    </section>
  </main>
  )
}

export default CreateEvent;

