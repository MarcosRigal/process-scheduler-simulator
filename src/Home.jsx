import "./App.css";
import React from "react";
import logo from "./assets/favicon.ico";
import uco from "./assets/uco.png";
import epsc from "./assets/epsc.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Container } from "@material-ui/core";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Helmet>
            <title>Process Scheduler Simulator</title>
          </Helmet>
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <a href="https://www.uco.es/">
                  <img src={uco} alt="uco" />
                </a>
              </Col>
              <Col md="auto">
                <a href="https://www.uco.es/eps/es/">
                  <img src={epsc} alt="epsc" />
                </a>
              </Col>
            </Row>
          </Container>
          <br></br>
          <Container>
            <p class="title">Process Scheduler Simulator</p>
            <p></p>
          </Container>
          <Container>
            <p></p>
            <img src={logo} alt="logo" height="128" />
            <p></p>
          </Container>
          <Container>
            <p></p>
            <Link to="/fcfs">
              <button class="button">
                <span>Iniciar </span>
              </button>
            </Link>
            <p></p>
          </Container>
          <Container>
            <p>By: Marcos Rivera Gavilán</p>
          </Container>
          <Container>
            <a
              className="App-link"
              href="https://github.com/MarcosRigal/process-scheduler-simulator"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/MarcosRigal/process-scheduler-simulator
            </a>
          </Container>
        </header>
      </div>
    );
  }
}

export default Home;
