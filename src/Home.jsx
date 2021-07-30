import "./App.css";
import React from "react";
import logo from "./assets/favicon.ico";
import uco from "./assets/uco.png";
import epsc from "./assets/epsc.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Helmet>
            <title>Process Scheduler Simulator</title>
          </Helmet>
          <div id="banner">
            <div class="inline-block">
              <a href="https://www.uco.es/">
                <img src={uco} alt="uco" />
              </a>
            </div>
            <div class="inline-block">
              <a href="https://www.uco.es/eps/es/">
                <img src={epsc} alt="epsc" />
              </a>
            </div>
          </div>
          <h1>Process Scheduler Simulator</h1>
          <img src={logo} alt="logo" height="128" />
          <br></br>
          <Link to="/fcfs">
            <button class="button">
              <span>Iniciar </span>
            </button>
          </Link>

          <p>By: Marcos Rivera Gavilán</p>
          <a
            className="App-link"
            href="https://github.com/MarcosRigal/process-scheduler-simulator"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/MarcosRigal/process-scheduler-simulator
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
