import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import WeatherCards from './WeatherCards';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export class MarsWeather extends React.Component {
  state =  {weather : null};

// Get weather data from NASA API
  componentDidMount() {
    fetch("url")
    .then(res => res.json())
    .then(data => {
      // Take the day number key and add it to the AT object as a value so it can be passed as a prop to WeatherCards.js
      const weather = data.sol_keys.map(key => {
        data[key].AT.dayNumber = key*1;
        // Add a key: value pair to toggle between Celsius and Farenheit
        data[key].AT.isFarenheit = 'C';
        return data[key];
      });
      this.setState({ weather });
    })
    .catch(console.log);  
  }

  // This function converts temps to C or F depending on the state of isFarenheit
  convert = (temp, isFarenheit) => {
    if(isFarenheit === 'C') {
      return (temp * (9/5)) + 32
    } else if (isFarenheit === 'F') {
      return (temp - 32) * (5/9)
    }
  }   

  // Use convert() to calculate C or F for min and max temps for each Martian day
  onClick = () => {
    this.setState({weather: this.state.weather.map(weatherDay => {
      const newMn = this.convert(weatherDay.AT.mn, weatherDay.AT.isFarenheit);
      weatherDay.AT.mn = newMn;
      const newMx = this.convert(weatherDay.AT.mx, weatherDay.AT.isFarenheit);
      weatherDay.AT.mx = newMx;
      // Toggle C and F to trigger the correct calculation in convert()
      weatherDay.AT.isFarenheit =  (weatherDay.AT.isFarenheit ==='C') ? 'F' : 'C';
      return weatherDay;
    })
    });
  };

  render() {
    console.log(this.state.weather);
    return (
     <div>
       <Container>
        <Jumbotron className="bg-transparent">
        <h1>Martian Weather Station</h1>
          <p>
            Weather Data from Elysium Planitia
          </p>
        </Jumbotron>
      </Container>
        <Row className="justify-content-sm-start ml-sm-2 ml-1">
          {/* Only render the weather cards if the fetch API call has completed */}
          {this.state.weather && this.state.weather.map((val, index) => (
            <Col sm="auto" key={index}>
              <WeatherCards
              // Props sent to WeatherCards.js
              sol={val.AT.dayNumber}
              date={new Date(val.First_UTC).toDateString()}
              min={Math.round(val.AT.mn)}
              max={Math.round(val.AT.mx)}
              deg={val.AT.isFarenheit}
              />
            </Col>))
          }
        </Row>
        <button onClick={this.onClick}>Convert Temps</button>
     </div>   
    );
  }    
}

