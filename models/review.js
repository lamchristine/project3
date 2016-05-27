var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var User = require('./user');


var reviewSchema = new Schema({
  rating: Number,
  title: String,
  likes_counter: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' },

  // content: String,
});

var Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
