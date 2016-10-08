/*************************************************/
//Created By Eric Stermer - General Assembly WDIR//
/*************************************************/

/******************EXTERNAL FILES*****************/
var User = require("./models/user.js").model;
var logic = require('./public/js/logic.js');
/*************************************************/


/******************NODE MODULES*******************/
pry = require('pryjs');
var logger = require('morgan');
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var hbs = require('hbs');
var passport = require('passport');
var bodyParser = require('body-parser');
/*************************************************/


/******************MONGOOSE***********************/
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/milelogger';
mongoose.connect(mongoURI);
mongoose.Promise = global.Promise;
/*************************************************/


/******************EXPRESS CONFIG*****************/
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));
app.use( bodyParser.json() );    // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({  // to support URL-encoded bodies
  extended: true
}));
/*************************************************/


/******************HANDLEBARS*********************/
app.set('view engine', 'hbs');
app.set('views', './views');
/*************************************************/


/******************PASSPORT CONFIG****************/
//Strategies
var LocalStrategy = require('passport-local').Strategy;

//Middleware
app.use(require('express-session')({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
/*************************************************/


/******************CONTROLLERS********************/
var editRunController = require('./controllers/edit-run.js');
var newRunController = require('./controllers/new-run.js');
var paceCalcController = require('./controllers/pace-calc.js');
var weeklyMileageController = require('./controllers/weekly-mileage.js');
var joinTeamController = require('./controllers/join-team.js');
app.use('/:username/edit-run', editRunController);
app.use('/:username/new-run', newRunController);
app.use('/pace-calculator', paceCalcController);
app.use('/:username/weekly-mileage', weeklyMileageController);
app.use('/:username/join-team', joinTeamController);
/*************************************************/


/******************FRONTEND RENDERING*************/
//HOME PAGE
app.get('/', function(req, res){
  res.render('home', {
    user: req.user
  })
});

app.get('/:username', function(req, res){
  if (!req.user || req.user.username != req.params.username) {
    res.redirect('/');
  } else {
    var user = User.findOne({username: username});
    res.render('index', user);
  }
});

//REGISTER USER
app.post('/register', function(req, res){
  User.register(new User({
    username: req.body.username
  }),
  req.body.password,
  function(err, user){
    if(err) res.redirect('/');
    //auto login after signup
    req.login(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/' + req.user.username);
    });
  });
});

//LOG USER IN
app.post('/login', passport.authenticate('local'), function(req, res){
  res.redirect('/' + req.user.username)
});

//LOG USER OUT
app.delete('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

/*************************************************/


/******************SERVER*************************/
var port = process.env.PORT || 8000

app.listen(port, function () {
  console.log("Server listening at port " + port);
});
/*************************************************/
