const db = require('../database/index.js');

require('mysql2/node_modules/iconv-lite').encodingExists('foo');
//should empty db before running the test


test('should add data to database', (done) => {
  db.addPhone('Galaxy', ['someurl1', 'someurl2', 'someurl3']);
    .then(() {
      db.images.findAll({ raw: true })
        .then(function (data) {
           return data;
           done()
        })
        .then((urls) => {
          console.log('=================', urls)
          expect(urls.length).toBe(3);
          db.sequelize.close();
          done();
        })
        .catch((err) => {
          console.log(err)
        })
        done()
    })
})