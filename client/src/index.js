import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {MarsWeather} from "./MarsWeather";
import {LocalWeather} from "./LocalWeather";
import {RoverPics} from "./RoverPics";
import './index.css';

class App extends React.Component {
  render () {
    return (
      <div>
          <Container fluid>
            <MarsWeather />
            <Row>
              <Col xs={3} className="leftCol"><LocalWeather /></Col>
              <Col xs={8}><RoverPics /></Col>
            </Row>
          </Container>
      </div> 
    );
  }
}
  

ReactDOM.render( <App />, document.getElementById('root'));