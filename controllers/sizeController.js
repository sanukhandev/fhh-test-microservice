const { getSize } = require("../service/sizeService");
const Logger = require('../util/loggerUtils')
const logger = new Logger('size-controller')
const calculateSize = async(req, res) => {
    const items = req.body;

    const httpPromise = await getSize(items);
    try {
        logger.info("calling all promise concurrently")
        const sizes = await Promise.allSettled(httpPromise);
        let response = []
        sizes.forEach(x => {
            if(x.status === 'rejected'){
                logger.error("Error in response")
                response.push({error:"error in response"})
            } else {
                response.push(x.value.data)
            }
        })
        res.json(response);
    } catch (error) {
        console.log(error)
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