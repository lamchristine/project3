var db = require("./models");

var user_a = {
  email: "a",
  password: "a",
  displayName: "Alan Perlis"
}

var reviews = [
  {
    title: "The early bird",
    content: "In software systems, it is often the early bird that makes the worm."
  },
  {
    title: "Purpose",
    content: "Every program has (at least) two purposes: the one for which it was written, and another for which it wasn't."
  },
  {
    title: "Moral",
    content: "One man's constant is another man's variable."
  }
]

db.User.remove({}, function(){
  db.Review.remove({}, function(){
    db.User.create(user_a, function(err, user){
      if (err || !user) { return console.log(err); }
      var user_a_reviews = reviews.map(function(r){r.user = user._id; return r;})
      db.Review.create(user_a_reviews, function(err, reviews){
          if (err) { return console.log(err); }
          console.log("Created", reviews.length, "reviews")
          process.exit()
        }
      )
    })
  });
});
