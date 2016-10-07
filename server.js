//Created By Eric Stermer - General Assembly WDIR //
/*************************************************/

/******************EXTERNAL FILES*****************/
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

//Middleware

/*************************************************/


/******************CONTROLLERS********************/
var editRunController = require('./controllers/edit-run.js');
var newRunController = require('./controllers/new-run.js');
var runsController = require('./controllers/runs.js');
var paceCalcController = require('./controllers/pace-calc.js');
/*************************************************/


/******************FRONTEND RENDERING*************/
/*************************************************/


/******************SERVER*************************/
var port = process.env.PORT || 8000

app.listen(port, function () {
  console.log("Server listening at port " + port);
});
/*************************************************/
