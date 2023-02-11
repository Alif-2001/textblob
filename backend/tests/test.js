const request = require('supertest');
const app = require('../app');

describe("GET /api", () => {
    it("should return Hello World!", (done) => {
        request(app)
            .get("/api")
            .expect(200)
            .expect("Hello World!", done);
    })
})
