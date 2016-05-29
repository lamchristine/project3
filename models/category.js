// var deepPopulate = require('mongoose-deep-populate')(mongoose);
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var categorySchema = new Schema({
  name: String,
  reviews: [ { type: Schema.Types.ObjectId, ref: 'Review' } ],
  image: String,
  places: [ { type: Schema.Types.ObjectId, ref: 'Place' } ],
  items: [ { type: Schema.Types.ObjectId, ref: 'Item' } ]
});

var Category = mongoose.model('Category', categorySchema);
module.exports = Category;
