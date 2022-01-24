const httpUtil = require("../util/httpUtils");
const Logger = require('../util/loggerUtils')
const logger = new Logger('size-service')

const SIZE_SERVICE_URL = 'http://localhost:3001/size';
const SIZE_SERVICE_METHOD = 'POST';


const getSize = (items) => {
    let httpPromise = [];
    items.forEach((item) => {
       try {
        logger.info("createing async service call for item:", item);
        httpPromise.push(
            httpUtil(SIZE_SERVICE_METHOD, SIZE_SERVICE_URL, item)
        )
       } catch (error) {
        logger.error("Error Creating promise",error );
       }
    });
    logger.info("Returning the list of promise", httpPromise);
    return httpPromise;
}

module.exports = {
    getSize
}