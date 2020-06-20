const express = require('express');
const bodyParser = require('body-parser');
const db = require('../../database/index.js');
const app = express();
app.use(express.static('../../public'));
app.use(bodyParser.json());
app.listen(3001, () => {
  console.log('Listening on port 3001')
})

app.get('/image', (req, res) => {
  db.images.findAll({ where: {
    imageId: 3
  }})
  .then(function (data) {
     res.send(data);
     res.end();
  })
})
app.get('/phone', (req, res) => {
  db.images.findAll({ where: {
    phoneId: 3
  }})
  .then(function (data) {
     res.send(data);
     res.end();
  })
})



module.exports = app;