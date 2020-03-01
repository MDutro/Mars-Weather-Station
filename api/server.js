const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

app.get('/', (req, res) => {
  axios.get('https://api.nasa.gov/insight_weather/?api_key=k547ehnkSmMt0ML6IcR1K7s5gx03NKUA0LOVHl0b&feedtype=json&ver=1.0')
  .then(response => console.log(response))
  .then(response => res.send(response))
  .catch(err => console.log(err))
});

app.listen(3001);