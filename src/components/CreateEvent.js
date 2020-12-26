import React from 'react';
import profile from '../images/profile.png';
import calendar from '../images/calendar.svg';
import time from '../images/time.svg';
import location from '../images/location.svg';
import bonus from '../images/bonus.svg';


function CreateEvent({isNatureChosen}) {

  const [selectValue, setSelectValue] = React.useState({
    category: "",
  });

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setSelectValue({
      [name]: value,
    });
  };

    // function handleSubmit(e) {
  //   e.preventDefault();

  //   const { email, password } = formValues;

  //   // Передаю значения управляемых компонентов во внешний обработчик
  //   props.onFormSubmit({
  //     email,
  //     password
  //   });
  // }

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
          {/* функция для обновления value -> в стейт и в зависимости от стейта нужный стих */}
          <option>Уборка города</option>
          <option>Посыпать дорожки песком</option>
          <option>Уборка снега</option>
          <option>Передержка собаки</option>
          <option>Покормить собаку</option>
          <option>Приютить котенка</option>
          <option>Уборка леса</option>
          <option>Уборка клумб</option>
          <option>Передержка щенка</option>
          <option>Посадка цветов</option>
          <option>Посадка деревьев</option>
          <option>Покормить птиц</option>
          <option>Смастерить скворечник</option>
        </select>}
        <article className=" initiation__text">
          Из окошек мусор не бросайте,<br />
          Территорию не засоряйте!<br />
          Ведь по тротуарам люди ходят,<br />
          Под ногами мусор ваш находят.<br />
          Мусор по округе разлетится,<br />
          Чистый город в грязный превратится.
        </article>
        {/* handleSubmit -> данные в апи */}
        <button type="submit" className="initiation__create">Создать меропритие</button>
      </form>
    </section>
  </main>
  </>
  )
}

export default CreateEvent;