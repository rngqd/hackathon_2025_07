import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import CreateEvent from './CreateEvent';
import Main from './Main';
import ActiveEvents from './ActiveEvents';
import Results from './Results';
import Profile from './Profile';
import Facebook from '../images/Facebook.svg';
import Linkedin from '../images/Linkedin.svg';
import Google from '../images/Google.svg';

function App() {
  const history = useHistory();


  function createEvent() {
    history.push("/create-event");
  }

  return (
    <body class="page">
      <Switch>
        <Route exact path="/">
          <Main handleClick={createEvent} />
        </Route>
        <Route path="/create-event">
          <CreateEvent />
        </Route>
        <Route path="/active-events">
          <ActiveEvents />
        </Route>
        <Route path="/results">
          <Results />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
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
