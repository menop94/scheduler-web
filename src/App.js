import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./Components/Navigation";
import Calendar from "./Pages/Calendar";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
