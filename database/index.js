const mysql = require('mysql');
const Sequelize = require('sequelize');
const data = require('../config.js');

const sequelize = new Sequelize ('photos', data.username, data.password, {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate()
  .then(function(err) {
    console.log('We connected!')
  })
  .catch(function(err) {
    console.log('Unable to connect :(', err)
  })