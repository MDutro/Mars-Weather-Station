import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Card from 'react-bootstrap/Card';
import './MarsWeather.css'

const WeatherCards = (props) => {
  return (
    <Card className="darkCard">
      <Card.Body>
        <Card.Title>Day {props.sol}</Card.Title>
        {/* Take a slice of the UTC format date string to get 3 digit month, 2 digit day format */}
        <Card.Subtitle className="mb-2">{props.date.slice(4, 10)}</Card.Subtitle>
        <Card.Text>
          High: {props.max} {props.deg} <br/>
          Low: {props.min} {props.deg}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WeatherCards;