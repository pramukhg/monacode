var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile( path.resolve(__dirname + '/../views/index.html') , { title: 'Express' });
});

module.exports = router;
