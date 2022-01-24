const winston = require("winston");
timeStamp = () => {
    return new Date(Date.now()).toUTCString();
};

class Logger {

    constructor(service) {
        this.log_data = null;
        this.service = service;
        const logger = winston.createLogger({
            transports: [
                new winston.transports.File({
                    filename: `./logs/size-microservice-logs-${new Date().getDate()}-${new Date().getFullYear()}-${new Date().getMonth()}.log`,
                }),
            ],

            format: winston.format.printf((info) => {

                let message = `${timeStamp()} | ${info.level} |  ${info.message} | From: ${service} `;

                return message;
            }),
        });

        this.logger = logger;
    }

    setLogData(log_data) {
        this.log_data = log_data;
    }

    async info(message) {
        this.logger.log("info", message);
    }

    async info(message, obj) {
        this.logger.log("info", message, {
            obj,
        });
    }

    async debug(message) {
        this.logger.log("debug", message);
    }

    async debug(message, obj) {
        this.logger.log("debug", message, {
            obj,
        });
    }

    async error(message) {
        this.logger.log("error", message);
    }

    async error(message, obj) {
        this.logger.log("error", message, {
            obj,
        });
    }
}

module.exports = Logger;
