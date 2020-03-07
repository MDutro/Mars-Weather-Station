import React from 'react';
import axios from 'axios';
import ZipCode from "./ZipCode";
import WeatherResults from "./WeatherResults";


export class LocalWeather extends React.Component {
  state =  {localWeather : "", zip: ""};

  handleChange = async e => {
    await this.setState({ zip : e.target.value})
    console.log(this.state)
  }

  onFormSubmit = event => {
    event.preventDefault();

    axios.get(`http://localhost:3001/search?zip=${this.state.zip}`)
    .then(response => response.data)
    .then(response => console.log(response))
    .then(response =>
      // const localWeather = response.isFarenheit = 'C'
      this.setState({localWeather: response})
    )
    .catch(err => console.log(err))
  }
  

  GetWeather = () => {
    // const localWeather = this.state.localWeather;
    if (!this.state.localWeather) {
      return <ZipCode 
        handleChange={this.handleChange}
        onFormSubmit={this.onFormSubmit}
        />
    }
    return <WeatherResults 
      // city = 
      // low = {this.state.localWeather.main.temp_min}
      // high = {this.state.localWeather.main.temp_max}
    />
  }

  render() {
    return (
      <div>
        <this.GetWeather />
      </div>
    );
  }
}