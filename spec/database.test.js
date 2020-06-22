const db = require('../database/index.js');

require('mysql2/node_modules/iconv-lite').encodingExists('foo');

afterAll(() => {
  return db.sequelize.close();
});


test('should check first phone in database', done => {
  return db.images.findAll({ where: {
    phoneId: 1
  }})
    .then((data) => {
      expect(data.length).toBe(7);
      done();
    })
    .catch((err) => {
      done(err);
    });
  done();
});


test('should check first image in database', done => {
  return db.images.findAll({ where: {
    imageId: 1
  }})
    .then((data) => {
      expect(data[0].dataValues.imageUrl).toBe('https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone1.webp');
      done();
    })
    .catch((err) => {
      done(err);
    });
  done();
});