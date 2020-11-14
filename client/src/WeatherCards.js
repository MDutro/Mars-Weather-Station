import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Card from "react-bootstrap/Card";
import "./MarsWeather.css";

const WeatherCards = ({ sol, date, max, min, deg, noData }) => {
  return (
    <Card className="darkCard">
      <Card.Body>
        <Card.Title>Day {sol}</Card.Title>
        {/* Take a slice of the UTC format date string to get 3 digit month, 2 digit day format */}
        <Card.Subtitle className="mb-2">{date.slice(4, 10)}</Card.Subtitle>
        <Card.Text>
          {noData ? (
            <p>No data for today</p>
          ) : (
            <div>
              <p>
                High: {max} {deg}
              </p>{" "}
              <p>
                Low: {min} {deg}
              </p>
            </div>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default WeatherCards;
