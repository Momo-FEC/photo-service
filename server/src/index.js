const express = require('express');
const bodyParser = require('body-parser');
const db = require('../../database/index.js');
const app = express();
app.use(bodyParser.json());
app.listen(3001, () => {
  console.log('Listening on port 3001')
})
app.get('/', (req, res) => {
  console.log('request success')
})


module.exports = app;