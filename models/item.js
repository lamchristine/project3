var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Review = require('./review');
var Place = require('./place');


var itemSchema = new Schema({
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  place: { type: Schema.Types.ObjectId, ref: 'Place' },
  // reviews: [Review.schema],
  name: String
});

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
