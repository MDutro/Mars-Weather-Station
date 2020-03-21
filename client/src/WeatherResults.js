import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const WeatherResults = props => {

  return (
    <Container>
      <Card>
        <Card.Header>Current Local Weather</Card.Header>
        <Card.Body>
          <Card.Title>{props.city}</Card.Title>
          <Card.Text>
            {props.low} C / {props.high} C
          </Card.Text>
          <Button variant="primary">Convert Temps</Button>
          <Button onClick={props.getNewZip} variant="primary" style={{marginLeft: '0.5rem'}}>Go Back</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default WeatherResults