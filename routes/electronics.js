var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('electronics', { title: 'Search Results by electronics' });
});

module.exports = router;