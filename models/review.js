var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var reviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  place: { type: Schema.Types.ObjectId, ref: 'Place' },
  rating: Number,
  title: String,
  likes_counter: Number,
  // content: String,
});

var Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
