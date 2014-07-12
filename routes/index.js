var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'The index page!' })
});

module.exports = router;

/* GET Hello World page. */
router.get('/contact', function(req, res) {
    res.render('contact', { title: 'Michael Pierce' })
});

/* GET Hello World page. */
router.get('/portfolio', function(req, res) {
    res.render('portfolio', { title: 'Michael Pierce' })
});
