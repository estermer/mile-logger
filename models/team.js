var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
  name: String,
  joinPassword: String,
  members: [UserSchema]
});

var TeamModel = mongoose.model('Team', TeamSchema);

module.exports = {
  schema: TeamSchema,
  model: TeamModel
};
