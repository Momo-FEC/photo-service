const mysql = require('mysql');
const Sequelize = require('sequelize');

const sequelize = new Sequelize ('photos', 'user', 'Project123!', {
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