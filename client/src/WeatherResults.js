import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './MarsWeather.css'

const WeatherResults = props => {

  return (
    // <Container>
      <Card className="darkCard" style={{width: '90%', fontSize: '1.75rem'}}>
        <Card.Header>Current Local Weather</Card.Header>
        <Card.Body>
          <Card.Title style={{fontSize: '1.75rem'}}>{props.city}</Card.Title>
          <Card.Text>
            High: {props.high} {props.deg} <br/>
            Low: {props.low} {props.deg}
          </Card.Text>
          <Button className="button" onClick={props.onConvert} variant="primary">Convert Temps</Button>
          <Button className="button" onClick={props.getNewZip} variant="primary" style={{marginLeft: '0.5rem'}}>Go Back</Button>
        </Card.Body>
      </Card>
    // </Container>
  )
}

export default WeatherResults