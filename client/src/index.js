import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import {MarsWeather} from "./MarsWeather";
import {LocalWeather} from "./LocalWeather";

class App extends React.Component {
  render () {
    return (
      <div>
        <MarsWeather />
        <LocalWeather />
      </div> 
    );
  }
}
  

ReactDOM.render( <App />, document.getElementById('root'));