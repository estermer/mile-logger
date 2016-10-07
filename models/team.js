var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user.js');

var TeamSchema = new Schema({
  name: String,
  joinPassword: String,
  members: [User.schema]
});

var TeamModel = mongoose.model('Team', TeamSchema);

module.exports = {
  schema: TeamSchema,
  model: TeamModel
};
