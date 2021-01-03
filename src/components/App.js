import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import ProtectedRoute from "./ProtectedRoute";
import Header from './Header';
import CreateEvent from './CreateEvent';
import Main from './Main';
import ActiveEvents from './ActiveEvents';
import Results from './Results';
import Footer from './Footer';
import Profile from './Profile';

function App() {
  const history = useHistory();

  const [eventType, setEventType] = React.useState(null);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  function handleCreateEvent(type) {
    setEventType(type);
    setIsLoggedIn(true);
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
      <Route exact path="/">
        <Header isLoggedIn={isLoggedIn} />
      </Route>
      <Route path="/create-event">
        <Header isLoggedIn={isLoggedIn} />
      </Route>
      <Route path="/active-events">
        <Header isLoggedIn={isLoggedIn} />
      </Route>
      <Route path="/results">
        <Header isLoggedIn={isLoggedIn} />
      </Route>
      <Switch>
        <Route exact path="/">
          <Main 
          createEvent={handleCreateEvent}
          handleActiveEventsClick={handleActiveEventsClick}
          handleResultsClick={handleResultsClick} />
        </Route>
        <ProtectedRoute 
        path="/create-event" 
        component={CreateEvent} 
        eventType={eventType}
        />
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
      <Route exact path="/">
        <Footer />
      </Route>
      <Route path="/create-event">
        <Footer />
      </Route>
      <Route path="/active-events">
        <Footer />
      </Route>
      <Route path="/results">
        <Footer />
      </Route>
    </div>
  );
}

export default App;
