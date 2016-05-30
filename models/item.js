var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var itemSchema = new Schema({
  place: { type: Schema.Types.ObjectId, ref: 'Place' },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  name: String,
  reviews: [ { type: Schema.Types.ObjectId, ref: 'Review' } ],
  price: String,
});

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
