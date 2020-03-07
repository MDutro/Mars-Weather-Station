import React from 'react';
import axios from 'axios';
import convert from "./convert";
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
    .then(data => {
        data.main.isFarenheit = 'C'
        this.setState({localWeather: data})
    })
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
      city = {this.state.localWeather.name}
      low = {this.state.localWeather.main.temp_min}
      high = {this.state.localWeather.main.temp_max}
    />
  }

  render() {
    console.log(this.state.localWeather);
    return (
      <div>
        <this.GetWeather />
      </div>
    );
  }
}