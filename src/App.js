import React from "react";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from './components/contact/Contact';
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/navigation/Navigation"
import NoMatch from "./components/nomatch/NoMatch"

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
        <Route path="/welcome/:name" component={Welcome} />
        <Route component={NoMatch} />
        

      </Switch>
      <Navigation />

    </div>
  );
}

export default App;
