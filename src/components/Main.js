import React from 'react';

function Main() {
  return (
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
  )
}

export default Main;