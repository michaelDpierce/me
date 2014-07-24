var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/contact', function(req, res) {
    res.render('contact', { title: 'Michael Pierce' })
});

router.get('/portfolio', function(req, res) {
    res.render('portfolio', { title: 'Michael Pierce' })
});

