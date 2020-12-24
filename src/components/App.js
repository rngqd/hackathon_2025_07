import React from "react";
import { Route } from 'react-router-dom';
import CreateEvent from "./CreateEvent";
import Main from './Main';
import Facebook from '../images/Facebook.svg';
import Linkedin from '../images/Linkedin.svg';
import Google from '../images/Google.svg';

function App() {
  return (
    <body class="page">
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/create-event">
        <CreateEvent />
      </Route>
      <footer className="footer">
    <div className="footer__container">
      <p className="footer__text"> Copyright © 2019</p>
      <nav className="footer__socials">
        <a className className="footer__social" href="#"> <img src={Facebook} alt="Фейсбук" /></a>
        <a className className="footer__social" href="#"> <img src={Linkedin} alt="Линкедин" /></a>
      <a className className="footer__social" href="#"> <img src={Google} alt="Гугл" /></a>
      </nav>
    </div>
  </footer>
    </body>
  );
}

export default App;
