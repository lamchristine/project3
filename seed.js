var db = require("./models");

var user_a = {
  email: "a",
  password: "a",
  username: "Alan Perlis"
}

var place = {
  address: "245 Bush Street",
  name: "Zanzes Cheesecake",
  website: "wwww.zanzacheese.com"
};

var category = {
  name: "Cheesecake"
};


var reviews = [
  {
    title: "The creamiest cheesecake ever!",
    rating: 5.0,
    likes_counter: 21,
    // content: "In software systems, it is often the early bird that makes the worm."
  },
  {
    title: "So buttery!",
    rating: 4.5,
    likes_counter: 61,
    // content: "Every program has (at least) two purposes: the one for which it was written, and another for which it wasn't."
  },
  {
    title: "AMAZING!",
    rating: 4.5,
    likes_counter: 121,
    // content: "One man's constant is another man's variable."
  }
];

db.User.remove({}, function(){
  db.Place.remove({}, function(){
    db.Category.remove({}, function(){
      db.Review.remove({}, function(){
        db.User.create(user_a, function(err, user){
          db.Place.create(place, function(err, place){
            db.Category.create(category, function(err, category){
              if (err || !user) { return console.log(err); }
              var user_a_reviews = reviews.map(function(r){r.user = user._id; return r;});
              user_a_reviews = reviews.map(function(r){r.category = category._id; return r;});
              user_a_reviews = reviews.map(function(r){r.place = place._id; return r;});
              db.Review.create(user_a_reviews, function(err, reviews){
                  if (err) { return console.log(err); }
                  console.log("Created", reviews.length, "reviews");
                  process.exit();
                }
              );
            });
          });
        });
      });
    });
  });
});
