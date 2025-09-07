const request = require('supertest');
const { app , server, name} = require('../app'); 

describe('GET /', () => {
    it('should return Welcome My Page!',  async() => {
        const responce = await request(app).get('/');
        expect(responce.status).toBe(200);
        expect(responce.text).toBe(`Welcome ${name} Page!`);
    })
})

afterAll(() => {
    server.close();
})