var express = require('express');
var router = express.Router();
var User = require('../models/user.js').model;
var logic = require('../public/js/logic.js');

//RENDER NEW RUN FORM
router.get('/', function(req, res){
  if (!req.user) {
    res.redirect('/');
  } else {
    res.render('new', {
      username: req.user.username
    });
  }
});

//SUBMIT NEW RUN INFO TO DB
router.post('/create', function(req, res){

  //find the current user
  User.findOne({username: req.user.username}, function(err, user){
    if(err)console.log(err);

    //calculate pace of the run
    if(req.body.time !== '' || req.body.distance !== ''){
      var pace = logic.calculatePace(req.body.time, req.body.distance);
    }
    console.log(pace);

    user.runningLog.push({
      runName: req.body.runName,
      date: req.body.date,
      distance: req.body.distance,
      time: req.body.time,
      pace: pace,
      rpe: req.body.rpe,
      description: req.body.description
    });
    user.save(function(err){
      if(err)console.log(err);
    });

    console.log(user);
  });

  res.redirect('/' + req.user.username);
});

module.exports = router;
