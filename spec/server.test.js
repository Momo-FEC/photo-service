const app = require('../server/index.js');
const reqest = require('supertest');

describe("GET /phones/1 ", () => {
  test("It should respond with an array of images", async () => {
    const response = await request(app).get("/phones/1");
    expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
    expect(response.statusCode).toBe(200);
  });
});
