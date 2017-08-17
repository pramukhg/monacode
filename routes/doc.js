var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res) {
  res.sendFile( path.resolve(__dirname + '/../views/doc.html') , { title: 'Express' });
});

router.get('/', function(req, res) {
  res.redirect('/');
});

module.exports = router;
