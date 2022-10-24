import express from "express";
import * as helmet from "helmet";
import rateLimit, { MemoryStore } from "express-rate-limit";
import cors from "cors";

import helloWorld from "./controllers/hello.controller";

const app = express();

const globalRateLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: false,
    store: new MemoryStore(),
});

app.get("/", (req: express.Request, res: express.Response) => {
    const message = helloWorld();

    res.send({ pong: message });
});

app.use(helmet.expectCt({
    maxAge: 86400,
    enforce: true
}));

app.use(
    helmet.frameguard(), helmet.hidePoweredBy(),
    helmet.hsts(), helmet.noSniff(), helmet.permittedCrossDomainPolicies(),
    cors()
);

app.use("/*", globalRateLimiter);

export default app;