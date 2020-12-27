import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

import ProtectedRoute from "./ProtectedRoute";
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
  const [isCityChosen, setIsCityChosen] = React.useState(false);
  const [isPeopleChosen, setIsPeopleChosen] = React.useState(false);
  const [isAnimalsChosen, setIsAnimalsChosen] = React.useState(false);

  function createNatureEvent() {
    setIsCityChosen(false);
    setIsPeopleChosen(false);
    setIsAnimalsChosen(false);
    setIsNatureChosen(true);
    history.push("/create-event");
  }

  function createCityEvent() {
    setIsNatureChosen(false);
    setIsPeopleChosen(false);
    setIsAnimalsChosen(false);
    setIsCityChosen(true);
    history.push("/create-event");
  }

  function createPeopleEvent() {
    setIsNatureChosen(false);
    setIsCityChosen(false);
    setIsAnimalsChosen(false);
    setIsPeopleChosen(true);
    history.push("/create-event");
  }

  function createAnimalsEvent() {
    setIsNatureChosen(false);
    setIsCityChosen(false);
    setIsPeopleChosen(false);
    setIsAnimalsChosen(true);
    history.push("/create-event");
  }

  function  handleActiveEventsClick () {
    history.push("/active-events");
  }

  function handleResultsClick() {
    history.push("/results");
  }

  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Main 
          handleCityClick={createCityEvent}
          handleNatureClick={createNatureEvent}
          handlePeopleClick={createPeopleEvent}
          handleAnimalsClick={createAnimalsEvent}
          handleActiveEventsClick={handleActiveEventsClick}
          handleResultsClick={handleResultsClick} />
        </Route>
        <ProtectedRoute 
        path="/create-event" 
        component={CreateEvent} 
        isNatureChosen={isNatureChosen} 
        isCityChosen={isCityChosen} 
        isPeopleChosen={isPeopleChosen}
        isAnimalsChosen={isAnimalsChosen} />
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
