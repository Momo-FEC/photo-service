const db = require('../database/index.js');
const request = require('supertest');
const app = require('../server/index.js')
const $ = require('jquery');
// const  React =  require('react');
// const enzyme =  require('enzyme');
// const wrapper = enzyme.shallow(<App/>);


require('mysql2/node_modules/iconv-lite').encodingExists('foo');

afterAll(async () => {
  app.server.close()
  await new Promise(resolve => setTimeout(() => resolve(), 10000)); // avoid jest open handle error
});

afterAll(() => {
  return db.sequelize.close();
});

describe("Should test database", () => {
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
});

describe("Should test Server ", () => {
  jest.setTimeout(30000);
  test("It should respond to phones request", async () => {
    const response = await request(app).get("/phone/1");
    expect(response.body[0].imageUrl).toEqual('https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone1.webp');
  });

  test("It should respond to image request", async () => {
    const response = await request(app).get("/image/1");
    expect(response.body[0].imageUrl).toEqual('https://fec-photos-carousel.s3-us-west-1.amazonaws.com/FEC+Photos/phone1.webp');
  });
});


// describe("Should test Client ", () => {
//   test("It should respond to phones request", done => {
//     console.log(wrapper)
//     expected(Array.isArray(wrapper)).toBe(true);
//   });
// });

