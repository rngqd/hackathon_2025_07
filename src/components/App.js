import React from "react";
import { Route } from 'react-router-dom';
import CreateEvent from "./CreateEvent";
import Main from './Main';

function App() {
  return (
    <body class="page">
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/create-event">
        <CreateEvent />
      </Route>
    </body>
  );
}

export default App;
