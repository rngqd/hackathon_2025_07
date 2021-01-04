import React from 'react';
import search from '../images/search.svg';
import profile from '../images/profile.png';

function Header({isLoggedIn}) {
  return(
    <header className="header">
      {isLoggedIn ? <a href="./index.html" className="header__back"></a> : <a href="./index.html" className="header__logo"></a>}
      <select name="select-city" className={isLoggedIn ? "header__select-city header__select-city_type_profile" : "header__select-city"}> 
        <option value="Москва">Москва</option>
        <option value="Питер" defaultValue>Санкт-Петербург</option>
        <option value="Краснодар">Краснодар</option>
      </select>
      {isLoggedIn ? <img src={profile} alt="Аватарка" className="header__avatar" /> : <><button type="button" className="header__search"><img src={search} alt="Поиск" /></button><a href="./initiation.html" className="header__login">Вход</a></>}
    </header>
  )
}

export default Header;