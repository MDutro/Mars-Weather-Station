import React from 'react';
import ZipCode from "./ZipCode";
import WeatherResults from "./WeatherResults";


export class LocalWeather extends React.Component {
  state =  {localWeather : "", zip: ""};

  handleChange = async e => {
    await this.setState({ zip : e.target.value})
    console.log(this.state)
  }

  onFormSubmit = 
  

  GetWeather = () => {
    const localWeather = this.state.localWeather;
    if (!localWeather) {
      return <ZipCode 
        handleChange={this.handleChange}
        onFormSubmit={this.onFormSubmit}
        />
    }
    return <WeatherResults />
  }

  render() {
    return (
      <div>
        <this.GetWeather />
      </div>
    );
  }
}