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
      item: "New York Cheesecake",
      place: "Zanzes Cheesecake",
    },
    {
      title: "So buttery!",
      rating: 4.5,
      likes_counter: 61,
      email: "sarah@jackson.com",
      image: "viva_cheesecake2.jpg",
      item: "Blueberry Cheesecake",
      place: "Viva La Tarte"
      // content: "Every program has (at least) two purposes: the one for which it was written, and another for which it wasn't."
    },
    {
      title: "AMAZING!",
      rating: 4.5,
      likes_counter: 121,
      email: "sarah@jackson.com",
      image: "lafolie_lambchop1.jpg",
      item: "Grilled Lamb Chops",
      place: "La Folie"
      // content: "One man's constant is another man's variable."
    },
    {
      title: "Decent, but not worth the price",
      rating: 4.5,
      likes_counter: 121,
      email: "sarah@jackson.com",
      image: "lafolie_lambchop2.jpg",
      item: "Rosemary Lamb Chops",
      place: "Wayfare Tavern"
      // content: "One man's constant is another man's variable."
    },
    {
      title: "Mind-blown!",
      rating: 5.0,
      likes_counter: 21,
      email: "jimmy@choo.com",
      image: "smokes_poutine1.jpg",
      item: "Original Poutine",
      place: "Smokes Poutinerie"
      // content: "One man's constant is another man's variable."
    },
    {
      title: "Unremarkable!",
      rating: 3.0,
      likes_counter: 11,
      email: "sarah@jackson.com",
      image: "smokes_poutine2.jpg",
      item: "Smoked Meat Poutine",
      place: "Zoes"
      // content: "One man's constant is another man's variable."
    }
  ];

var places_list = [
  {
    name: "Zanzes Cheesecake",
    address: "2405 Ocean Ave, San Francisco, CA 94127",
    phone_num: "(415) 334-2264",
    website: "https://www.yelp.com/biz/zanzes-cheesecake-san-francisco",
    image: "zanze.jpg",
    coord_arr: [-122.469546, 37.730098]
  },
  {
    name: "Viva La Tarte",
    address: "1160 Howard St, San Francisco, CA 94103",
    phone_num: "(415) 891-9743",
    website: "http://vivelatarte.com",
    image:"viva.jpg",
    coord_arr: [-122.410523, 37.776990]
  },
  {
    name: "Genki Crepes",
    address: "330 Clement St, San Francisco, CA 94118",
    phone_num: "(415) 379-6414",
    website: "http://www.genkicrepes.com",
    image: "genki.jpg",
    coord_arr: [-122.462439, 37.783156]
  },
  {
    name: "Zoes",
    address: "3088 24th St, San Francisco, CA 94110",
    phone_num: "(415) 817-1972",
    website: "http://www.zoessf.com",
    image: "zoe.png",
    coord_arr: [-122.413385, 37.752640]
  },
  {
    name: "Wayfare Tavern",
    address: "558 Sacramento St, San Francisco, CA 94111",
    phone_num: "(415) 772-9060",
    website: "http://www.wayfaretavern.com",
    image: "wayfare.jpg",
    coord_arr: [-122.401893, 37.793980]
  },
  {
    name: "Smokes Poutinerie",
    address: "2518 Durant Ave, Unit A, Berkeley, CA 94704",
    phone_num: "(510) 540-7500",
    website: "http://smokespoutinerie.com",
    image: "smokes.jpeg",
    coord_arr: [-122.257365, 37.867777]
  },
  {
    name: "La Folie",
    address: "2316 Polk St, San Francisco, CA 94109",
    phone_num: "(415) 776-5577",
    website: "http://lafolie.com",
    image: "folie.jpg",
    coord_arr: [-122.421676, 37.798102]
  },
  {
    name: "Nopa",
    address: "560 Divisadero St, San Francisco, CA 94117",
    phone_num: "(415) 864-8643",
    website: "http://nopasf.com",
    image: "nopa.jpg",
    coord_arr: [-122.437173, 37.774953]
  },
  {
    name: "Boulevard",
    address: "1 Mission St, San Francisco, CA 94105",
    phone_num: "(415) 543-6084",
    website: "http://www.boulevardrestaurant.com",
    image: "boulevard.jpg",
    coord_arr: [-122.392439, 37.793388]
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
    name: "Blueberry Cheesecake",
    place: "Zanzes Cheesecake",
    category: "Cheesecake",
    price: "$18"
  },
  {
    name: "New York Cheesecake",
    place: "Viva La Tarte",
    category: "Cheesecake",
    price: "$6"
  },
  {
    name: "Strawberry Cheesecake",
    place: "Genki Crepes",
    category: "Cheesecake",
    price: "$5"
  },
  {
    name: "Grilled Lamb Chops",
    place: "La Folie",
    category: "Lamb Chops",
    price: "$38"
  },
  {
    name: "Rosemary Lamb Chops",
    place: "Nopa",
    category: "Lamb Chops",
    price: "$28"
  },
  {
    name: "Herb Roasted Lamb Chops",
    place: "Boulevard",
    category: "Lamb Chops",
    price: "$43"
  },
  {
    name: "Chili Cheese Bacon Poutine",
    place: "Zoes",
    category: "Poutine",
    price: "$8"
  },
  {
    name: "Original Poutine",
    place: "Wayfare Tavern",
    category: "Poutine",
    price: "$10"
  },
  {
    name: "Smoked Meat Poutine",
    place: "Wayfare Tavern",
    category: "Poutine",
    price: "$6"
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
                name: itemData.name,
                price: itemData.price
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

              db.Category.findOne({name: itemData.category}, function (err, foundCategory) {
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
          image: reviewData.image,
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

// mongo
// show dbs
// use Project3App
//
//
// c = db.categories.findOne({name: "Cheesecake"})
// p = db.places.findOne({name: "Zanzes Cheesecake" })
// c.places.push(p._id)
// db.categories.save(c)
//
//
// c = db.categories.findOne({name: "Cheesecake"})
// p = db.places.findOne({name: "Viva La Tarte"})
// c.places.push(p._id)
// db.categories.save(c)
//
//
// c = db.categories.findOne({name: "Cheesecake"})
// p = db.places.findOne({name: "Genki Crepes"})
// c.places.push(p._id)
// db.categories.save(c)
//
//
// c = db.categories.findOne({name: "Poutine"})
// p = db.places.findOne({name: "Zoes"})
// c.places.push(p._id)
// db.categories.save(c)
//
//
// c = db.categories.findOne({name: "Poutine"})
// p = db.places.findOne({name: "Wayfare Tavern"})
// c.places.push(p._id)
// db.categories.save(c)
//
//
// c = db.categories.findOne({name: "Poutine"})
// p = db.places.findOne({name: "Smokes Poutinerie"})
// c.places.push(p._id)
// db.categories.save(c)
//
//
// c = db.categories.findOne({name: "Lamb Chops"})
// p = db.places.findOne({name: "La Folie"})
// c.places.push(p._id)
// db.categories.save(c)
//
//
// c = db.categories.findOne({name: "Lamb Chops"})
// p = db.places.findOne({name: "Nopa"})
// c.places.push(p._id)
// db.categories.save(c)
//
//
// c = db.categories.findOne({name: "Lamb Chops"})
// p = db.places.findOne({name: "Boulevard"})
// c.places.push(p._id)
// db.categories.save(c)
//
//
// ///////////////////////////////////////////
//
//
// c = db.categories.findOne({name: "Cheesecake"})
// r = db.reviews.findOne({title: "The creamiest cheesecake ever!"})
// c.reviews.push(r._id)
// db.categories.save(c)
//
//
// c = db.categories.findOne({name: "Cheesecake"})
// r = db.reviews.findOne({title: "So buttery!"})
// c.reviews.push(r._id)
// db.categories.save(c)
//
//
// c = db.categories.findOne({name: "Lamb Chops"})
// r = db.reviews.findOne({title: "AMAZING!"})
// c.reviews.push(r._id)
// db.categories.save(c)
//
//
// c = db.categories.findOne({name: "Lamb Chops"})
// r = db.reviews.findOne({title: "Decent, but not worth the price"})
// c.reviews.push(r._id)
// db.categories.save(c)
//
//
// c = db.categories.findOne({name: "Poutine"})
// r = db.reviews.findOne({title: "Mind-blown!"})
// c.reviews.push(r._id)
// db.categories.save(c)
//
//
// c = db.categories.findOne({name: "Poutine"})
// r = db.reviews.findOne({title: "Unremarkable!"})
// c.reviews.push(r._id)
// db.categories.save(c)
//
//
// ///////////////////////////////////////
//
//
// zanze=db.places.findOne({name:"Zanzes Cheesecake"})
// viva=db.places.findOne({name:"Viva La Tarte"})
// genki=db.places.findOne({name:"Genki Crepes"})
// zoes=db.places.findOne({name:"Zoes"})
// wayfare=db.places.findOne({name:"Wayfare Tavern"})
// smokes=db.places.findOne({name:"Smokes Poutinerie"})
// folie=db.places.findOne({name:"La Folie"})
// nopa=db.places.findOne({name:"Nopa"})
// boulevard=db.places.findOne({name:"Boulevard"})
//
//
// cheesecake = db.categories.findOne({name: "Cheesecake"})
// poutine = db.categories.findOne({name: "Poutine"})
// lamb = db.categories.findOne({name: "Lamb Chops"})
//
//
//
// r = db.reviews.findOne({title:"The creamiest cheesecake ever!"})
// r.place=zanze
// r.category=cheesecake
// db.reviews.save(r)
//
//
// r = db.reviews.findOne({title: "So buttery!"})
// r.place=viva._id
// r.category=cheesecake._id
// db.reviews.save(r)
//
//
// r = db.reviews.findOne({title: "AMAZING!"})
// r.place=folie._id
// r.category=lamb._id
// db.reviews.save(r)
//
//
// r = db.reviews.findOne({title: "Decent, but not worth the price"})
// r.place=wayfare._id
// r.category=lamb._id
// db.reviews.save(r)
//
//
// r = db.reviews.findOne({title: "Mind-blown!"})
// r.place=smokes._id
// r.category=poutine._id
// db.reviews.save(r)
//
//
// r = db.reviews.findOne({title: "Unremarkable!"})
// r.place=zoes._id
// r.category=poutine._id
// db.reviews.save(r)
//
//
// ////////////////////////
//
//
// bc = db.items.findOne({name: "Blueberry Cheesecake"})
// cheesecake.items.push(bc._id)
// db.categories.save(cheesecake)
//
//
// ny = db.items.findOne({name: "New York Cheesecake"})
// cheesecake.items.push(ny._id)
// db.categories.save(cheesecake)
//
//
// sc = db.items.findOne({name: "Strawberry Cheesecake"})
// cheesecake.items.push(sc._id)
// db.categories.save(cheesecake)
//
//
// grilled = db.items.findOne({name: "Grilled Lamb Chops"})
// lamb.items.push(grilled._id)
// db.categories.save(lamb)
//
//
// rosemary= db.items.findOne({name: "Rosemary Lamb Chops"})
// lamb.items.push(rosemary._id)
// db.categories.save(lamb)
//
//
// herb = db.items.findOne({name: "Herb Roasted Lamb Chops"})
// lamb.items.push(herb._id)
// db.categories.save(lamb)
//
//
//
// chili = db.items.findOne({name: "Chili Cheese Bacon Poutine"})
// poutine.items.push(chili._id)
// db.categories.save(poutine)
//
//
// original = db.items.findOne({name: "Original Poutine"})
// poutine.items.push(original._id)
// db.categories.save(poutine)
//
//
// smoked=db.items.findOne({name: "Smoked Meat Poutine"})
// poutine.items.push(smoked._id)
// db.categories.save(poutine)
//
//
//
//
// //////////////////////////////////////////
//
// r = db.reviews.findOne({title:"The creamiest cheesecake ever!"})
// ny = db.items.findOne({name: "New York Cheesecake"})
// sarah=db.users.findOne({first_name: "Sarah"})
// sarah.reviews.push(r._id)
// ny.reviews.push(r._id)
// r.item = ny._id
// db.reviews.save(r)
// db.items.save(ny)
// db.users.save(sarah)
//
//
// r = db.reviews.findOne({title: "So buttery!"})
// bc = db.items.findOne({name: "Blueberry Cheesecake"})
// john=db.users.findOne({first_name: "John"})
// john.reviews.push(r._id)
// bc.reviews.push(r._id)
// r.item = bc._id
// db.reviews.save(r)
// db.items.save(bc)
// db.users.save(john)
//
//
// r = db.reviews.findOne({title: "AMAZING!"})
// grilled = db.items.findOne({name: "Grilled Lamb Chops"})
// jimmy=db.users.findOne({first_name: "Jimmy"})
// jimmy.reviews.push(r._id)
// grilled.reviews.push(r._id)
// r.item = grilled._id
// db.reviews.save(r)
// db.items.save(grilled)
// db.users.save(jimmy)
//
//
// r = db.reviews.findOne({title: "Decent, but not worth the price"})
// rosemary= db.items.findOne({name: "Rosemary Lamb Chops"})
// john=db.users.findOne({first_name: "John"})
// john.reviews.push(r._id)
// rosemary.reviews.push(r._id)
// r.item = rosemary._id
// db.reviews.save(r)
// db.items.save(rosemary)
// db.users.save(john)
//
//
// r = db.reviews.findOne({title: "Mind-blown!"})
// original = db.items.findOne({name: "Original Poutine"})
// jimmy=db.users.findOne({first_name: "Jimmy"})
// jimmy.reviews.push(r._id)
// original.reviews.push(r._id)
// r.item = original._id
// db.reviews.save(r)
// db.items.save(original)
// db.users.save(jimmy)
//
//
//
// r = db.reviews.findOne({title: "Unremarkable!"})
// smoked=db.items.findOne({name: "Smoked Meat Poutine"})
// sarah=db.users.findOne({first_name: "Sarah"})
// sarah.reviews.push(r._id)
// smoked.reviews.push(r._id)
// r.item = smoked._id
// db.reviews.save(r)
// db.items.save(smoked)
// db.users.save(sarah)
//
//
