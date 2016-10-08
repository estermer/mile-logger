var express = require('express');
var router = express.Router();

//RENDER NEW RUN FORM
router.get('/', function(req, res){
  res.render('new', {
    username: req.user.username
  });
});

//SUBMIT NEW RUN INFO TO DB
router.post('/create', function(req, res){
  console.log(req.body);
  res.redirect('/' + req.user.username);
});

module.exports = router;
