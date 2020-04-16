require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const mars = process.env.MARS_KEY;
const local = process.env.LOCAL_KEY;

app.use(cors());

app.get('/', (req, res) => {
  const marsUrl = 'https://api.nasa.gov/insight_weather/?api_key=' + mars + '&feedtype=json&ver=1.0';
  axios.get(marsUrl)
  .then(response => response.data)
  .then(response => res.send(response))
  .catch(err => console.log(err))
});

app.get('/search', (req, res) => {
  const localUrl = `http://api.weatherapi.com/v1/forecast.json?key=${local}&q=${req.query.zip}&days=1` 
  axios.get(localUrl)
  .then(response => response.data)
  .then(data => res.send(JSON.stringify(data)))
  .catch(err => console.log(err))
});

app.listen(3001);
console.log("Listening on 3001");
