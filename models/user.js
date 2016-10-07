var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Run = require('./run.js');

var UserSchema = new Schema({
  username: String,
  password: String,
  runningLog: [Run.schema],
  longestRun: Run.schema,
  fastestRun: Run.schema,
  team: String
});

var UserModel = mongoose.model('User', UserSchema);

module.exports = {
  schema: UserSchema,
  model: UserModel
};
