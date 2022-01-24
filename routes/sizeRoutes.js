var express = require('express');
const { calculateSize } = require('../controllers/sizeController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({message: 'Welcome to the size API'});
});

router.post('/calculate-size', calculateSize)

module.exports = router;