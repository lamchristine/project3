var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var reviewSchema = new Schema({
  created: { type: Date, default: Date.now },
  updated: { type: Date },
  rating: Number,
  title: String,
  likes_counter: Number,
  image: String,
  content: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  place: { type: Schema.Types.ObjectId, ref: 'Place' },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  item: { type: Schema.Types.ObjectId, ref: 'Item' }
});

var Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
