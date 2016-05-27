var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// var Item = require('./item');
// var Review = require('./review');


var placeSchema = new Schema({
  name: String,
  address: String,
  website: String,
  // items: [Item.schema],
  // reviews: [Review.schema],
  // items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
  // reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }]

  // longitude: Number,
  // latitude: Number,
});

var Place = mongoose.model('Place', placeSchema);
module.exports = Place;
