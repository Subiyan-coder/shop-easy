const request = require('supertest');
const { app , server} = require('../app'); 

describe('GET /', () => {
    it('should return Welcome My Page!',  async() => {
        const responce = await request(app).get('/');
        expect(responce.status).toBe(200);
        expect(responce.text).toBe('Welcome My Page!');
    })
})

afterAll(() => {
    server.close();
})