import "./App.css";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Fcfs from "./fcfs";
import Fmpq from "./fmpq";
import Mpq from "./mpq";
import Rr from "./rr";
import Spn from "./spn";
import Srt from "./srt";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div></div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/fcfs">
            <Fcfs />
          </Route>
          <Route path="/fmpq">
            <Fmpq />
          </Route>
          <Route path="/mpq">
            <Mpq />
          </Route>
          <Route path="/rr">
            <Rr />
          </Route>
          <Route path="/spn">
            <Spn />
          </Route>
          <Route path="/srt">
            <Srt />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
