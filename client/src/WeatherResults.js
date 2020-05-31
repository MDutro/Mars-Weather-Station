import React from "react";
import Card from 'react-bootstrap/Card';
import './MarsWeather.css'

const WeatherResults = props => {

  return (
    <Card className="darkCard" style={{width: '90%', fontSize: '1.75rem'}}>
      <Card.Header>Current Local Weather</Card.Header>
      <Card.Body>
        <Card.Title style={{fontSize: '1.75rem'}}>{props.city}</Card.Title>
        <Card.Text>
          High: {props.high} {props.deg} <br/>
          Low: {props.low} {props.deg}
        </Card.Text>
        <button className="button" onClick={props.onConvert} variant="primary">Convert Temps</button>
        <button className="button" onClick={props.getNewZip} variant="primary" style={{marginLeft: '0.5rem'}}>Go Back</button>
      </Card.Body>
    </Card>
  )
}

export default WeatherResults