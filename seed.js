var db = require("./models");

var users_list = [
  {
    first_name: "John",
    last_name: "Smith",
    username: "jsmith",
    password: "abc",
    email: "john@smith.com",
    avatar: "",
  },
  {
    first_name: "Sarah",
    last_name: "Jackson",
    username: "sjackson",
    password: "abc",
    email: "sarah@jackson.com",
    avatar: "",
  },
  {
    first_name: "Jimmy",
    last_name: "Choo",
    username: "jchoo",
    password: "abc",
    email: "jimmy@choo.com",
    avatar: "",
  }
];




  var reviews_list = [
    {
      title: "The creamiest cheesecake ever!",
      rating: 5.0,
      likes_counter: 21,
      email: "john@smith.com",
    },
    {
      title: "So buttery!",
      rating: 4.5,
      likes_counter: 61,
      email: "sarah@jackson.com",
      // content: "Every program has (at least) two purposes: the one for which it was written, and another for which it wasn't."
    },
    {
      title: "AMAZING!",
      rating: 4.5,
      likes_counter: 121,
      email: "sarah@jackson.com",
      // content: "One man's constant is another man's variable."
    },
    {
      title: "Mind-blown!",
      rating: 5.0,
      likes_counter: 21,
      email: "jimmy@choo.com",
      // content: "One man's constant is another man's variable."
    },
    {
      title: "Unremarkable!",
      rating: 3.0,
      likes_counter: 11,
      email: "sarah@jackson.com",
      // content: "One man's constant is another man's variable."
    }
  ];

var places_list = [
  {
    address: "245 Bush Street",
    name: "Zanzes Cheesecake",
    website: "wwww.zanzacheese.com"
  },
  {
    address: "111 26th Street",
    name: "Hog & Pie",
    website: "wwww.hogpie.com"
  },
  {
    address: "45 Market Street",
    name: "Alexanders Steakhouse",
    website: "wwww.asteak.com"
  },
  {
    address: "45 Market Street",
    name: "State Bird Provision",
    website: "wwww.statebird.com"
  }
];


var items_list = [
  {
    name: "Cheesecake",
    place: "Zanzes Cheesecake"
  },
  {
    name: "Cheesecake",
    place: "Alexanders Steakhouse"
  },
  {
    name: "Lamp Chops",
    place: "Alexanders Steakhouse"
  },
  {
    name: "Lamp Chops",
    place: "State Bird Provision"
  },
  {
    name: "Poutine",
    place: "Alexanders Steakhouse"
  },
  {
    name: "Poutine",
    place: "Hog & Pie"
  }
];

db.Place.remove({}, function(err, places) {
  console.log('removed all places');
  db.Place.create(places_list, function(err, places){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all places');
    console.log("created", places.length, "places");

    db.Item.remove({}, function(err, items){
      console.log('removed all items');
      items_list.forEach(function (itemData) {
        var item = new db.Item({
          name: itemData.name
        });
        db.Place.findOne({name: itemData.place}, function (err, foundPlace) {
          console.log('found place ' + foundPlace.name + ' for item ' + item.name);
          if (err) {
            console.log(err);
            return;
          }
          item.place = foundPlace;
          item.save(function(err, savedItem){
            if (err) {
              return console.log(err);
            }
            console.log('saved ' + savedItem.name + ' from ' + foundPlace.name);
          });
        });
      });
    });
  });
});


db.User.remove({}, function(err, users) {
  console.log('removed all places');
  db.User.create(users_list, function(err, users){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all users');
    console.log("created", users.length, "users");

    db.Review.remove({}, function(err, reviews){
      console.log('removed all reviews');
      reviews_list.forEach(function (reviewData) {
        var review = new db.Review({
          title: reviewData.title,
          rating: reviewData.rating,
          likes_counter: reviewData.likes_counter,
        });
        db.User.findOne({email: reviewData.email}, function (err, foundUser) {
          console.log('found user ' + foundUser.email + ' for review ' + review.title);
          if (err) {
            console.log(err);
            return;
          }
          review.user = foundUser;
          review.save(function(err, savedReview){
            if (err) {
              return console.log(err);
            }
            console.log('saved ' + savedReview.title + ' from ' + foundUser.email);
          });
        });
      });
    });
  });
});



// var place =
//   {
//     address: "245 Bush Street",
//     name: "Zanzes Cheesecake",
//     website: "wwww.zanzacheese.com"
//   };
//
//   var item =
//     {
//       name: "Cheesecake"
//     };
//
// var reviews = [
//   {
//     title: "The creamiest cheesecake ever!",
//     rating: 5.0,
//     likes_counter: 21,
//     // content: "In software systems, it is often the early bird that makes the worm."
//   },
//   {
//     title: "So buttery!",
//     rating: 4.5,
//     likes_counter: 61,
//     // content: "Every program has (at least) two purposes: the one for which it was written, and another for which it wasn't."
//   },
//   {
//     title: "AMAZING!",
//     rating: 4.5,
//     likes_counter: 121,
//     // content: "One man's constant is another man's variable."
//   }
// ];

// db.Review.remove({}, function(){
//   db.Item.remove({}, function(){
//     db.Place.remove({}, function(){
//       db.User.remove({}, function(){
//         db.User.create(user_a, function(err, user){
//           db.Place.create(place, function(err, place){
//             db.Item.create(item, function(err, item){
//               if (err || !user) { return console.log(err); }
//               var user_a_reviews = reviews.map(function(r){r.user = user._id; return r;});
//               user_a_reviews = reviews.map(function(r){r.item = item._id; return r;});
//               user_a_reviews = reviews.map(function(r){r.place = place._id; return r;});
//               db.Review.create(user_a_reviews, function(err, reviews){
//                   if (err) { return console.log(err); }
//                   console.log("Created", reviews.length, "reviews");
//                   process.exit();
//                 }
//               );
//             });
//           });
//         });
//       });
//     });
//   });
// });

//creating categories with reference to place

//     db.Place.create(places, function(err, places){
//       if (err || !places) { return console.log(err); }
//       var place_a = categories.map(function(c){c.place = place._id; return c;})
//       db.Category.create(place_a, function(err, categories){
//           if (err) { return console.log(err); }
//           console.log("Created", categories.length, "categories")
//           process.exit()
//         }
//       )
//     })

// db.Review.remove()
// db.Review.remove({}, function(){
//   if (err || !reviews) { return console.log(err); }
//     db.Review.create({}, function(){
//   });
// })

// var userList = [];
// userList.push({
//               first_name: "John",
//               last_name: "Smith",
//               username: "jsmith",
//               password: "abc",
//               email: "john@smith.com",
//               avatar: "",
//             });
// userList.push({
//               first_name: "Jimmy",
//               last_name: "Choo",
//               username: "jchoo",
//               password: "abc",
//               email: "jimmy@choo.com",
//               avatar: "",
//             });
// userList.push({
//               first_name: "Sarah",
//               last_name: "Jackson",
//               username: "sjackson",
//               password: "abc",
//               email: "sarah@jackson.com",
//               avatar: "",
//             });
//
// var reviewList = [];
// reviewList.push ({
//   title: "The creamiest cheesecake ever!",
//   rating: 5.0,
//   likes_counter: 21,
// });
// reviewList.push ({
//   title: "So buttery!",
//   rating: 4.5,
//   likes_counter: 61,
// });
// reviewList.push ({
//   title: "AMAZING!",
//   rating: 4.5,
//   likes_counter: 121,
// });
//
//
// var itemList = [];
// itemList.push({
//   name: "cheesecake",
// });
// itemList.push({
//   name: "poutine",
// });
// itemList.push({
//   name: "lamb chops",
// });
//
//
//
// db.Review.remove({}, function(err, reviews){
//   console.log('removed all items');
//   db.Review.create(reviewList, function(err, reviews){
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log('recreated all reviews');
//
//     db.Item.remove({}, function(err, items){
//       itemList.forEach(function(itemData){
//         var item = new db.Item({
//           name: itemData.name
//         });
//         db.Review.findOne({})
//       })
//     })
//
//   })
// })





//*************************************
// populate item with reviews
// userList.forEach(function(user) {
//   user.reviews = reviewList;
// });
//
// db.User.remove({}, function(err, users){
//   db.User.create(userList, function(err, users){
//     if (err) { return console.log('ERROR', err); }
//     console.log("all users:", users);
//     console.log("created", users.length, "users");
//     process.exit();
//   });
// });
//******************************************
//
// var zanze_review = db.Review.create({
//     title: "The creamiest cheesecake ever!",
//     rating: 5.0,
//     likes_counter: 21,
//   });

// var alex_review = db.Review.create({
//     title: "So buttery!",
//     rating: 4.5,
//     likes_counter: 61,
//   });
//
// var hog_review = db.Review.create({
//     title: "AMAZING!",
//     rating: 4.5,
//     likes_counter: 121,
//   });
//
//
// var cheesecake = db.Item.create({
//   name: "cheesecake",
//   reviews: [zanze_review.id, alex_review, hog_review]
// });
//
// var poutine = db.Item.create({
//   name: "poutine",
//   reviews: [zanze_review, alex_review, hog_review]
// });
//
//
// var zanze = db.Place.create({
//   address: "245 Bush Street",
//   name: "Zanzes Cheesecake",
//   website: "wwww.zanzacheese.com",
//   items: [cheesecake]
// });
//
// var alex = db.Place.create({
//   address: "45 Market Street",
//   name: "Alexanders Steakhouse",
//   website: "wwww.asteak.com",
//   items: [poutine]
// });
//
// var hog = db.Place.create({
//   address: "111 26th Street",
//   name: "Hog and Pie",
//   website: "wwww.hogpie.com",
//   items: [poutine, cheesecake]
// });
//
// var John = db.User.create({
//   first_name: "John",
//   last_name: "Smith",
//   username: "jsmith",
//   password: "abc",
//   email: "john@smith.com",
//   avatar: "",
//   reviews: [zanze_review, hog_review]
// });
//
// var Jimmy = db.User.create({
//   first_name: "Jimmy",
//   last_name: "Choo",
//   username: "jchoo",
//   password: "abc",
//   email: "jimmy@choo.com",
//   avatar: "",
//   reviews: [alex_review, zanze_review]
// });
//
// var Sarah = db.User.create({
//   first_name: "Sarah",
//   last_name: "Jackson",
//   username: "sjackson",
//   password: "abc",
//   email: "sarah@jackson.com",
//   avatar: "",
//   reviews: [hog_review]
// });
//
//
