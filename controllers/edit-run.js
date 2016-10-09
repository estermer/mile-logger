var express = require('express');
var router = express.Router();
var User = require('../models/user.js').model;
var logic = require('../public/js/logic.js');

//RENDER EDIT FORM
router.get('/:id', function(req, res){
  if (!req.user) {
    res.redirect('/');
  } else {

    User.findOne({username: req.user.username}, function(err, user){
      var runDetails = logic.findRun(user.runningLog, req.params.id);

      res.render('edit', {
        username: req.user.username,
        runName: runDetails.runName,
        date: runDetails.date,
        distance: runDetails.distance,
        time: runDetails.time,
        pace: runDetails.pace,
        rpe: runDetails.rpe,
        description: runDetails.description,
        id: req.params.id
      });
    });
  }
});

//EDIT THE RUN
router.put('/:id/edit', function (req, res){

  User.findOne({username: req.user.username}, function(err, user){
    var runIndex = logic.findRunIndex(user.runningLog, req.params.id);

    //calculate pace of the run
    if(req.body.time !== '' || req.body.distance !== ''){
      var pace = logic.calculatePace(req.body.time, req.body.distance);
    }

    user.runningLog[runIndex] = {
      runName: req.body.runName,
      date: req.body.date,
      distance: req.body.distance,
      time: req.body.time,
      pace: pace,
      rpe: req.body.rpe,
      description: req.body.description
    };
    user.save(function(err, user){
      if(err)console.log(err);
    });

    res.redirect('/' + req.user.username);
  });
});



module.exports = router;
