var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/2', function(req, res, next) {
  res.send('hoho');
});



module.exports = router;
