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

let phone = 1;

module.exports.images = sequelize.define('images', {
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

  module.exports.addPhone = function(phoneName, imageUrls){
    console.log('phoneid', imageUrls)
    for(var i = 0; i < imageUrls.length; i++) {
      var addedPhone = module.exports.images.build({phoneId: phone, imageUrl: imageUrls[i]});
      addedPhone.save();
    }
    phone++
    console.log('new phone ', phone)
  }