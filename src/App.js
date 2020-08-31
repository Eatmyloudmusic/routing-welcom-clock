import React from "react";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from './components/contact/Contact';
import Navigation from "./components/navigation/Navigation"
import NoMatch from "./components/nomatch/NoMatch"
import Jeopardy from "./components/jeopardy/Jeopardy"

import { Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="mike"/>}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />

        <Route path="/jeopardy" component={Jeopardy} />
        <Route path="/welcome/:name" component={Welcome} />
        <Route component={NoMatch} />
        

      </Switch>
      <Navigation />

    </div>
  );
}

export default App;
