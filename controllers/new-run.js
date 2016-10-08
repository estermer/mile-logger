var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('new', {
    username: req.user.username
  });
});

module.exports = router;
