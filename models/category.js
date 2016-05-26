var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var categorySchema = new Schema({
  place: { type: Schema.Types.ObjectId, ref: 'Place' },
  name: String
});

var Category = mongoose.model('Category', categorySchema);
module.exports = Category;
