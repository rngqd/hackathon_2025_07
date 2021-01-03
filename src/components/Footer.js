import { render } from '@testing-library/react';
import React from 'react';
import Facebook from '../images/Facebook.svg';
import Linkedin from '../images/Linkedin.svg';
import Google from '../images/Google.svg';

function Footer() {
  return(
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__information">О нас</li>
        <li className="footer__information">Партнеры</li>
        <li className="footer__information">Связаться</li>
      </ul>
      <div className="footer__container">
        <p className="footer__text"> Copyright © 2019</p>
        <nav className="footer__socials">
          <a className className="footer__social" href="#"> <img src={Facebook} alt="Фейсбук" /></a>
          <a className className="footer__social" href="#"> <img src={Linkedin} alt="Линкедин" /></a>
          <a className className="footer__social" href="#"> <img src={Google} alt="Гугл" /></a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;