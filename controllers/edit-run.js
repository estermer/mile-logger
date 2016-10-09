var express = require('express');
var router = express.Router();
var User = require('../models/user.js').model;
var logic = require('../public/js/logic.js');

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
        description: runDetails.description
      });
    });
  }
});



module.exports = router;
