const mysql = require('mysql');
const Sequelize = require('sequelize');
const data = require('../config.js');

const sequelize = new Sequelize ('photos', MYSQL_USERNAME || data.username, MYSQL_PASSWORD || data.password, {
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

let phone = 1;

const images = sequelize.define('images', {
    imageId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
    imageUrl: {
      type: Sequelize.STRING
    },
    phoneId: {
      type: Sequelize.INTEGER
    }
  },  {
    timestamps: false
  })

  const addPhone = function(phoneName, imageUrls){
    for(var i = 0; i < imageUrls.length; i++) {
      var addedPhone = images.build({phoneId: phone, imageUrl: imageUrls[i]});
      addedPhone.save();
    }
    phone++
  }

  module.exports = {sequelize, addPhone, images};