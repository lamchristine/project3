var db = require("./models");

var users_list = [
  {
    first_name: "John",
    last_name: "Smith",
    username: "jsmith",
    password: "abc",
    email: "john@smith.com",
    avatar: "userprofile.png",
  },
  {
    first_name: "Sarah",
    last_name: "Jackson",
    username: "sjackson",
    password: "abc",
    email: "sarah@jackson.com",
    avatar: "userprofile.png",
  },
  {
    first_name: "Jimmy",
    last_name: "Choo",
    username: "jchoo",
    password: "abc",
    email: "jimmy@choo.com",
    avatar: "userprofile.png",
  }
];


  var reviews_list = [
    {
      title: "The creamiest cheesecake ever!",
      rating: 5.0,
      likes_counter: 21,
      email: "john@smith.com",
      image: "zanze_cheesecake1.jpg",
      item: "Cheesecake",
      place: "Zanzes Cheesecake",
    },
    {
      title: "So buttery!",
      rating: 4.5,
      likes_counter: 61,
      email: "sarah@jackson.com",
      image: "viva_cheesecake2.jpg",
      item: "Cheesecake",
      place: "Viva La Tarte"
      // content: "Every program has (at least) two purposes: the one for which it was written, and another for which it wasn't."
    },
    {
      title: "AMAZING!",
      rating: 4.5,
      likes_counter: 121,
      email: "sarah@jackson.com",
      image: "lafolie_lambchop1.jpg",
      item: "Lamb Chops",
      place: "La Folie"
      // content: "One man's constant is another man's variable."
    },
    {
      title: "Decent, but not worth the price",
      rating: 4.5,
      likes_counter: 121,
      email: "sarah@jackson.com",
      image: "lafolie_lambchop2.jpg",
      item: "Lamb Chops",
      place: "Wayfare Tavern"
      // content: "One man's constant is another man's variable."
    },
    {
      title: "Mind-blown!",
      rating: 5.0,
      likes_counter: 21,
      email: "jimmy@choo.com",
      image: "smokes_poutine1.jpg",
      item: "Poutine",
      place: "Zoes"
      // content: "One man's constant is another man's variable."
    },
    {
      title: "Unremarkable!",
      rating: 3.0,
      likes_counter: 11,
      email: "sarah@jackson.com",
      image: "smokes_poutine2.jpg",
      item: "Poutine",
      place: "Smokes Poutinerie"
      // content: "One man's constant is another man's variable."
    }
  ];

var places_list = [
  {
    name: "Zanzes Cheesecake",
    address: "2405 Ocean Ave, San Francisco, CA 94127",
    phone_num: "(415) 334-2264",
    website: "https://www.yelp.com/biz/zanzes-cheesecake-san-francisco",
    price: "$$"
  },
  {
    name: "Viva La Tarte",
    address: "1160 Howard St, San Francisco, CA 94103",
    phone_num: "(415) 891-9743",
    website: "http://vivelatarte.com",
    price: "$$"
  },
  {
    name: "Genki Crepes",
    address: "330 Clement St, San Francisco, CA 94118",
    phone_num: "(415) 379-6414",
    website: "http://www.genkicrepes.com",
    price: "$"
  },
  {
    name: "Zoes",
    address: "3088 24th St, San Francisco, CA 94110",
    phone_num: "(415) 817-1972",
    website: "http://www.zoessf.com",
    price: "$"
  },
  {
    name: "Wayfare Tavern",
    address: "558 Sacramento St, San Francisco, CA 94111",
    phone_num: "(415) 772-9060",
    website: "http://www.wayfaretavern.com",
    price: "$$"
  },
  {
    name: "Smokes Poutinerie",
    address: "2518 Durant Ave, Unit A, Berkeley, CA 94704",
    phone_num: "(510) 540-7500",
    website: "http://smokespoutinerie.com",
    price: "$"
  },
  {
    name: "La Folie",
    address: "2316 Polk St, San Francisco, CA 94109",
    phone_num: "(415) 776-5577",
    website: "http://lafolie.com",
    price: "$$$$"
  },
  {
    name: "Nopa",
    address: "560 Divisadero St, San Francisco, CA 94117",
    phone_num: "(415) 864-8643",
    website: "http://nopasf.com",
    price: "$$$"
  },
  {
    name: "Boulevard",
    address: "1 Mission St, San Francisco, CA 94105",
    phone_num: "(415) 543-6084",
    website: "http://www.boulevardrestaurant.com",
    price: "$$$$"
  }
];

var category_list = [
  {
    name: "Cheesecake",
    image: "category_cheesecake.jpeg"
  },
  {
    name: "Poutine",
    image: "category_poutine.jpg"
  },
  {
    name: "Lamb Chops",
    image: "category_lambchop.jpg"
  }
];


var items_list = [
  {
    name: "Cheesecake",
    place: "Zanzes Cheesecake"
  },
  {
    name: "Cheesecake",
    place: "Viva La Tarte"
  },
  {
    name: "Cheesecake",
    place: "Genki Crepes"
  },
  {
    name: "Lamb Chops",
    place: "La Folie"
  },
  {
    name: "Lamb Chops",
    place: "Nopa"
  },
  {
    name: "Lamb Chops",
    place: "Boulevard"
  },
  {
    name: "Poutine",
    place: "Zoes"
  },
  {
    name: "Poutine",
    place: "Wayfare Tavern"
  },
  {
    name: "Poutine",
    place: "Wayfare Tavern"
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

    db.Category.remove({}, function(err, categories){
      db.Category.create(category_list, function(err, categories){
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

              // db.Review.findOne({item:itemData.name, place: })

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

              db.Category.findOne({name: itemData.name}, function (err, foundCategory) {
                console.log('found category ' + foundCategory.name + ' for item ' + item.name);
                if (err) {
                  console.log(err);
                  return;
                }
                item.category = foundCategory;
                item.save(function(err, savedItem){
                  if (err) {
                    return console.log(err);
                  }
                  console.log('saved ' + savedItem.name + ' from ' + foundCategory.name);
                });
              });
            });
          });
        });
      });
    });
  });


// db.Category.remove({}, function(err, categories){
//   db.Category.create(category_list, function(err, categories){
//     if (err) { return console.log('ERROR', err); }
//     console.log("all categories:", categories);
//     console.log("created", categories.length, "categories");
//   });
// });


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
        //
        // db.Item.findOne({name: reviewData.item}, function (err, foundItem) {
        //   console.log('found item ' + foundItem.name + ' for review ' + review.item);
        //
        //   if (err) {
        //     console.log(err);
        //     return;
        //   }
        //   review.item = foundItem;
        //   review.save(function(err, savedItem){
        //     if (err) {
        //       return console.log(err);
        //     }
        //     console.log('saved ' + savedItem.name + ' from ' + foundItem.item);
        //
        //   });
        // });


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




// reviews_list.forEach(function (reviewData) {
//
//   review = db.Review.findOne({title: reviewData.title},function (err, review) {
//     console.log('hi');
//      if (err) {
//        console.log(err);
//        return;
//      }
//    });
//   item = db.Item.findOne({name: reviewData.item});
//   console.log('>>>>>>>>>>>>>' + review.title);
//   console.log('>>>>>>>>>>>>>>' + db.Item.count);
// });



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
