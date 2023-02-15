const request = require('supertest');
const app = require('../routes');

describe("GET /api", () => {
    it("should return Hello World!", (done) => {
        request(app)
            .get("/api")
            .expect(200)
            .expect("Hello World!", done);
    })
})
