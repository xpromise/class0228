var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var citiesSchema = new Schema({
  code: String,
  province: String,
  city: String,
  county: String,
  name: String,
  level: Number
})

var Cities = mongoose.model('Cities', citiesSchema);

module.exports = Cities;