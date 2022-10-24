import helloWorld from "../../controllers/hello.controller";

describe("Hello Controller Test Suite", () => {
    it("Should return hello message", () => {
        const mockMessage = "Hello World!";
        const message = helloWorld();

        expect(message).toBe(mockMessage);
    });
});