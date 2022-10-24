import express from "express";

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
    res.send({ pong: "Hello World!" });
});

export default app;