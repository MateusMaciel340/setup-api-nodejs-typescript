import http from "http";
import app from "./app";

import dotenv from "dotenv";
import logger from "./utils/logger";

dotenv.config();

const port: string = process.env.PORT || "3000";
const server: http.Server = new http.Server(app);

server.listen(port, () => {
    logger.debug(`Started server on port ${port}`);
});