import path from "path";
import { createLogger, format, transports } from "winston";

const logger = createLogger({
    level: "debug",
    format: format.json(),
    defaultMeta: { service: "my-project" },
    transports: [
        new transports.File({ filename: path.join(__dirname, "./logs/error.log"), level: "error" }),
        new transports.File({ filename: path.join(__dirname, './logs/combined.log') })
    ],
});

if (process.env.NODE_ENV !== "production") {
    logger.add(new transports.Console({
        format: format.colorize({
            all: true
        }),
    }));
}

export default logger;