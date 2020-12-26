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

  const [isNatureChosen, setIsNatureChosen] = React.useState(false);

  function createEvent() {
    setIsNatureChosen(true);
    history.push("/create-event");
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main handleNatureClick={createEvent} />
        </Route>
        <Route path="/create-event">
          <CreateEvent isNatureChosen={isNatureChosen} />
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
    </div>
  );
}

export default App;
