import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Card from 'react-bootstrap/Card';

const WeatherCards = (props) => {
  return (
    <Card style={{ width: '8rem' }}>
      <Card.Body>
        <Card.Title>{props.sol}</Card.Title>
        {/* Take a slice of the UTC format date string to get 3 digit month, 2 digit day format */}
        <Card.Subtitle className="mb-2 text-muted">{props.date.slice(4, 10)}</Card.Subtitle>
        <Card.Text>
          High: {props.max} {props.deg} <br/>
          Low: {props.min} {props.deg}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default WeatherCards;