var express = require('express');
var router = express.Router();
var logic = require('../public/js/logic.js');

router.get('/', function(req, res){
  res.render('pace-calc', {
    username: req.user
  })
});

module.exports = router;
