const { getSize } = require("../service/sizeService");
const Logger = require('../util/loggerUtils')
const logger = new Logger('size-controller')
const calculateSize = async(req, res) => {
    const items = req.body;

    const httpPromise = await getSize(items);
    try {
        logger.info("calling all promise concurrently")
        const sizes = await Promise.all(httpPromise);
        if(!sizes){
            logger.error("error getting reponse from promise")
        }
        const result = sizes.map((size) => { return size.data});
        logger.info("responding with sizes:", result)
        res.json(result);
    } catch (error) {
        logger.error("error in controller", error)
        res.json({
            log:error,
            status:"Error",
            message:"Internal server error"
        })
    }
   
    
}

module.exports = {
    calculateSize
}