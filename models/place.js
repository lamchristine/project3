var mongoose = require('mongoose'),
    Schema = mongoose.Schema;




var placeSchema = new Schema({
  created: { type: Date, default: Date.now },
  updated: { type: Date },
  name: String,
  address: String,
  website: String,
  phone_num: String,
  image: String
});

var Place = mongoose.model('Place', placeSchema);
module.exports = Place;
