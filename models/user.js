var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    bcrypt = require('bcryptjs');


var userSchema = new Schema({
  first_name: String,
  last_name: String,
  created: { type: Date, default: Date.now },
  updated: { type: Date },
  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
  username: String,
  avatar: String,
  // favorite_reviews: [ {review:{ type: Schema.Types.ObjectId, ref: 'Review'}} ]//double check!!!!
});

userSchema.pre('save', function (next) {
  // bump date updated
  this.updated = Date.now();

  // encrypt password
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(user.password, salt, function (err, hash) {
      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = function (password, done) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    done(err, isMatch);
  });
};

var User = mongoose.model('User', userSchema);
module.exports = User;
