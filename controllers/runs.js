var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  console.log('I AM LOGGED IN');
});

module.exports = router;
