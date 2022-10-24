import request from "supertest";
import app from "../../app";

describe("Hello Endpoint Test Suite", () => {
    it("Should return 200", (done) => {
        request(app)
            .get("/")
            .expect("Content-Type", /json/)
            .expect("Content-Length", "23")
            .expect(200, done);
    });
});