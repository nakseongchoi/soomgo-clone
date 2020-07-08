var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('soomgo.ejs', { title: 'gg' });
});

router.get('/1', function(req, res, next) {
  res.render('vanilla.ejs', { title: 'gg' });
});

router.get('/2', function(req, res, next) {
  res.send('hoho');
});

module.exports = router;
