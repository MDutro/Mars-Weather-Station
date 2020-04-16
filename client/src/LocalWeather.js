import React from 'react';
import axios from 'axios';
import convert from "./convert";
import ZipCode from "./ZipCode";
import WeatherResults from "./WeatherResults";


export class LocalWeather extends React.Component {
  state =  {localWeather: "", city: "", localMin: "", localMax: "", isFarenheit: "C", zip: ""};

  // Set state of zip as user types it in
  handleChange = async e => {
    await this.setState({ zip : e.target.value})
    console.log(this.state)
  }

  onFormSubmit = event => {
    event.preventDefault();
    // Call node server to get local weather data
    axios.get(`http://localhost:3001/search?zip=${this.state.zip}`)
    .then(response => response.data)
    .then(data => {
        console.log(data)
        this.setState({localWeather: data})
        // Break up state into chunks that are easy to manipulate
    }).then(() => this.setState({ 
      city: this.state.localWeather.location.name, 
      localMin: this.state.localWeather.forecast.forecastday[0].day.mintemp_c, 
      localMax: this.state.localWeather.forecast.forecastday[0].day.maxtemp_c 
    }))
    .catch(err => console.log(err))
  }

  onConvert = () => {
    // Convert temps between Celcius and Farenheit
    const newMin = convert(this.state.localMin, this.state.isFarenheit)
    const newMax = convert(this.state.localMax, this.state.isFarenheit)
    // Change state of units to pass into props for WeatherResults child component
    const units = (this.state.isFarenheit === 'C') ? 'F' : 'C'
    this.setState({localMin: newMin, localMax: newMax, isFarenheit: units})
    return true
  }

  // Reset state to empty strings to trigger ZipCode form to display
  getNewZip = () => {
    this.setState({city: "", zip: ""})
  }

  GetWeather = () => {
    // Display ZipCode form if state is empty. When state has data display WeatherResults
    if (!this.state.city) {
      return <ZipCode 
        handleChange={this.handleChange}
        onFormSubmit={this.onFormSubmit}
        />
    }
    return <WeatherResults 
      city = {this.state.city}
      low = {Math.round(this.state.localMin)}
      high = {Math.round(this.state.localMax)}
      deg = {this.state.isFarenheit}
      onConvert={this.onConvert}
      getNewZip = {this.getNewZip}
    />
  }

  render() {
    return (
      <div>
        <this.GetWeather style={{paddingTop: '0'}}/>
      </div>
    );
  }
}