var mongoose = require('mongoose'),
    Schema = mongoose.Schema;




var placeSchema = new Schema({
  name: String,
  address: String,
  website: String,
  phone_num: String,
  price: String,
});

var Place = mongoose.model('Place', placeSchema);
module.exports = Place;
