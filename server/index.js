const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const app = express();
app.use('/:Id', express.static('../public'));
app.use(bodyParser.json());
app.server = app.listen(3001, () => {
  console.log('Listening on port 3001');
});

app.get('/image/:Id', (req, res) => {
  var currentId = req.params.Id;
  db.images.findAll({ where: {
    imageId: currentId
  }})
    .then(function (data) {
      res.send(data);
      res.end();
    });
});

app.get('/phone/:Id', (req, res) => {
  var currentId = req.params.Id;
  db.images.findAll({ where: {
    phoneId: currentId
  }})
    .then(function (data) {
      res.send(data);
      res.end();
    });
});






module.exports = app;