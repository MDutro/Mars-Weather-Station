import React, {useState, useEffect} from "react";
import WeatherCards from "./WeatherCards";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import convert from "./convert";
import "./MarsWeather.css";

export const MarsWeather = () => {
  const [weather, setWeather] = useState({weather: null})

  // Get weather data from NASA API
  useEffect(() => {
    console.log("running")
    fetch("http://localhost:3001")
      .then((res) => res.json())
      .then((data) => {
        // Take the day number key and add it to the AT object as a value so it can be passed as a prop to WeatherCards.js
        console.log(data)
        const weather = data.validity_checks.sols_checked.map((key) => {
          if (data[key].AT) {
            data[key].AT.dayNumber = key * 1;
            // Add a key: value pair to toggle between Celsius and Farenheit
            data[key].AT.isFarenheit = "C";
            return data[key];
          } else {
            data[key].dayNumber = key * 1;
            data[key].noData = true;
            return data[key];
          }
          
        });
        console.log(weather)
        console.log("setting weather")
        setWeather({ weather: weather });
      })
      .catch(console.log);
  }, [])

  // Use convert() to calculate C or F for min and max temps for each Martian day
  const onClick = () => {
    setWeather({
      weather: weather.weather.map((weatherDay) => {
        if (weatherDay.AT) {
          const newMn = convert(weatherDay.AT.mn, weatherDay.AT.isFarenheit);
          weatherDay.AT.mn = newMn;
          const newMx = convert(weatherDay.AT.mx, weatherDay.AT.isFarenheit);
          weatherDay.AT.mx = newMx;
          // Toggle C and F to trigger the correct calculation in convert()
          weatherDay.AT.isFarenheit =
            weatherDay.AT.isFarenheit === "C" ? "F" : "C";
          return weatherDay;
        } else {
          return weatherDay;
        }
      }),
    });
  };

  // render() {
    return (
      <div>
        <Row>
          <Col>
            <h1 className="marsText">Martian Weather Station</h1>
            <p className="marsText">
              Weather Data from Insight at Elysium Planitia
            </p>
          </Col>
        </Row>
        <Row style={{ overflow: "hidden", marginBottom: "0.5rem" }}>
          {/* Only render the weather cards if the fetch API call has completed */}
          {weather.weather &&
            weather.weather.map((val, index) => (
              <Col /*style={{flex: "0 1 14%"}}*/ key={index}>
                <WeatherCards
                  // Props sent to WeatherCards.js
                  sol={val.AT?.dayNumber || val.dayNumber}
                  date={new Date(val.First_UTC).toDateString()}
                  min={Math.round(val.AT?.mn) || val.noData}
                  max={Math.round(val.AT?.mx) || ""}
                  deg={val.AT?.isFarenheit || ""}
                  noData={val.noData ? true : false}
                />
              </Col>
            ))}
        </Row>
        <button
          className="button"
          onClick={onClick}
          style={{ marginBottom: "2rem" }}
        >
          Convert Temps
        </button>
      </div>
    );
  // }
}
