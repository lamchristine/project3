var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var placeSchema = new Schema({
  name: String,
  address: String,
  website: String,
  // longitude: Number,
  // latitude: Number,
});

var Place = mongoose.model('Place', placeSchema);
module.exports = Place;
