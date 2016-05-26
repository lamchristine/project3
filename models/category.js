var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var categorySchema = new Schema({
  places: [{ type: Schema.Types.ObjectId, ref: 'Place' }],
  reviews: [{ type: Schema.Types.ObjectId, ref: 'Review' }],
  name: String
});

var Category = mongoose.model('Category', categorySchema);
module.exports = Category;
