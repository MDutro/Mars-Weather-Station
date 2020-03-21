import React from 'react';
import axios from 'axios';
import convert from "./convert";
import ZipCode from "./ZipCode";
import WeatherResults from "./WeatherResults";


export class LocalWeather extends React.Component {
  state =  {localWeather : "", zip: ""};

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
        // Add key value pair for temperature units for conversion function later on
        data.main.isFarenheit = 'C'
        this.setState({localWeather: data})
    })
    .catch(err => console.log(err))
  }

  // onConvert = () => {
  //   const newMin = convert(this.state.localWeather.main.temp_min, this.state.localWeather.main.isFarenheit)
  //   this.setState({localWeather: this.state.main.temp_min = newMin})
  //   const newMax = convert(this.state.localWeather.main.temp_max, this.state.localWeather.main.isFarenheit)
  //   this.setState({localWeather: this.state.main.temp_max = newMax})
  //   this.setState({localWeather: this.state.main.isFarenheit === 'C' ? 'F' : 'C'})
  //   return true
  // }

  // Reset state to empty strings to trigger ZipCode form to display
  getNewZip = () => {
    this.setState({localWeather: "", zip: ""})
  }

  GetWeather = () => {
    // Display ZipCode form if state is empty. When state has data display WeatherResults
    if (!this.state.localWeather) {
      return <ZipCode 
        handleChange={this.handleChange}
        onFormSubmit={this.onFormSubmit}
        onConvert={this.onConvert}
        />
    }
    return <WeatherResults 
      city = {this.state.localWeather.name}
      low = {this.state.localWeather.main.temp_min}
      high = {this.state.localWeather.main.temp_max}
      getNewZip = {this.getNewZip}
    />
  }

  render() {
    console.log(this.state.localWeather);
    return (
      <div>
        <this.GetWeather style={{paddingTop: '0'}}/>
      </div>
    );
  }
}