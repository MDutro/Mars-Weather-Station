import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Col';
import {MarsWeather} from "./MarsWeather";
import {LocalWeather} from "./LocalWeather";
import './index.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <Container>
          <Container>
            <MarsWeather />
            <Row>
              <Col xs={3} className="leftCol"><LocalWeather /></Col>
              <Col></Col>
            </Row>
          </Container>
        </Container>
      </div> 
    );
  }
}
  

ReactDOM.render( <App />, document.getElementById('root'));