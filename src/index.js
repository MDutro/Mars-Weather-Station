import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import {MarsWeather} from "./MarsWeather";

class App extends React.Component {
  render () {
    return <MarsWeather />
  }
}
  

ReactDOM.render( <App />, document.getElementById('root'));