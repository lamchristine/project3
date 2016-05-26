var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var reviewSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  content: String
});

var Review = mongoose.model('Review', reviewSchema);
module.exports = Review;
