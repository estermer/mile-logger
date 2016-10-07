//Created By Eric Stermer - General Assembly WDIR //
/*************************************************/

/******************EXTERNAL FILES*****************/
/*************************************************/


/******************NODE MODULES*******************/
pry = require('pryjs');
var logger = require('morgan');
var app = require('express')();
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var hbs = require('hbs');
var passport = require('passport');
var bodyParser = require('body-parser');

/*************************************************/


/******************MONGOOSE***********************/
var mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/milelogger';
mongoose.connect(mongoURI);
/*************************************************/


/******************EXPRESS CONFIG*****************/
/*************************************************/


/******************HANDLEBARS*********************/
/*************************************************/


/******************PASSPORT CONFIG****************/
//Strategies

//Middleware

/*************************************************/


/******************CONTROLLERS********************/
/*************************************************/


/******************FRONTEND RENDERING*************/
/*************************************************/


/******************SERVER*************************/
var port = process.env.PORT || 8000

app.listen(port, function () {
  console.log("Server listening at port " + port);
});
/*************************************************/
