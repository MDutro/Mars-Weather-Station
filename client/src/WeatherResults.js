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
            High: {props.high} {props.deg} <br/>
            Low: {props.low} {props.deg}
          </Card.Text>
          <Button onClick={props.onConvert} variant="primary">Convert Temps</Button>
          <Button onClick={props.getNewZip} variant="primary" style={{marginLeft: '0.5rem'}}>Go Back</Button>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default WeatherResults