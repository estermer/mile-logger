var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RunSchema = new Schema({
  runName: String,
  distance: Number,
  time: String,
  pace: String,
  rpe: Number,
  description: String
});

var RunModel = mongoose.model('Run', RunSchema);

module.exports = {
  schema: RunSchema,
  model: RunModel
};
