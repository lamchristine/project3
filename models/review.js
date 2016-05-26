var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var reviewSchema = new Schema({
  rating: Number,
  title: String,
  likes_counter: Number,
  // content: String,
});

var Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
