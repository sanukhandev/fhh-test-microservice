var express = require('express');
var router = express.Router();

const Logger = require('../utils/loggerUtils')
const logger = new Logger('size-microservice-controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/size', (req, res) => {
  logger.info("Recived request for :", req.body)
  const { length, width, height } = req.body;
  const size = {
    length,
    width,
    height,
    voluem: length * width * height
  };
  logger.info("Responded back with data", size)
  res.json(size);
})
module.exports = router;
