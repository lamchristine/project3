var db = require("./models");

var users_list = [
  {
    first_name: "John",
    last_name: "Smith",
    username: "jsmith",
    password: "abc",
    email: "john@smith.com",
    avatar: "icon2.png",
  },
  {
    first_name: "Sarah",
    last_name: "Jackson",
    username: "sjackson",
    password: "abc",
    email: "sarah@jackson.com",
    avatar: "cary.jpeg",
  },
  {
    first_name: "Jimmy",
    last_name: "Choo",
    username: "jchoo",
    password: "abc",
    email: "jimmy@choo.com",
    avatar: "images.jpeg",
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
      content: "This is literally the best cheesecake I've ever had in my life! It's super creamy and super light! Remember to call ahead before you go - they run out sometimes."
    },
    {
      title: "Buttery and rich",
      rating: 4.0,
      likes_counter: 61,
      email: "sarah@jackson.com",
      image: "viva_cheesecake2.jpg",
      item: "Blueberry Cheesecake",
      place: "Viva La Tarte",
      content: "Definitely one of the better places in SF. Highly recommended if you're in the area."
    },
    {
      title: "AMAZING!",
      rating: 4.5,
      likes_counter: 121,
      email: "sarah@jackson.com",
      image: "lafolie_lambchop1.jpg",
      item: "Grilled Lamb Chops",
      place: "La Folie",
      content: "My husband and I have been trying to find the best lamb chops in SF and I think this might actually be it. It comes with a steep price tag, but definitely worth it."
    },
    {
      title: "Done just right",
      rating: 4.0,
      likes_counter: 121,
      email: "sarah@jackson.com",
      image: "lafolie_lambchop2.jpg",
      item: "Rosemary Lamb Chops",
      place: "Nopa",
      content: "I'm really particular about my lamb chops and this was done just the way I like it. It was perfectly cooked and for the price, I would definitely come back."
    },
    {
      title: "Not as good as the one in Toronto, and the hunt continues...",
      rating: 3.0,
      likes_counter: 21,
      email: "jimmy@choo.com",
      image: "smokes_poutine1.jpg",
      item: "Original Poutine",
      place: "Smokes Poutinerie",
      content: "Ever since I moved to the States I've been trying to find a good poutine place. I thought Smokes would be it since we have the same chain back in Toronto, but it just wasn't as good. The gravy was hot enough, and the fries were not cripsy enough, it just didn't hit the spot."
    },
    {
      title: "Unremarkable!",
      rating: 2.0,
      likes_counter: 11,
      email: "sarah@jackson.com",
      image: "smokes_poutine2.jpg",
      item: "Smoked Meat Poutine",
      place:  "Wayfare Tavern",
      content: "Man they should really restrict people from naming dishes that are not what they are. This supposed poutine was made with cheedar cheese on waffle fries! Come on people, this is not a poutine! Needless to say, definitely not going back!"
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
    name: "New York Cheesecake",
    place: "Zanzes Cheesecake",
    category: "Cheesecake",
    price: "$18"
  },
  {
    name: "Blueberry Cheesecake",
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
    place: "Smokes Poutinerie",
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


//creating users
db.User.remove({}, function(err, users) {
  console.log('removed all users');
  db.User.create(users_list, function(err, users){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all users');
    console.log("created", users.length, "users");
  });
});


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

        //each item references a place
          db.Item.remove({}, function(err, items){
            console.log('removed all items');
            items_list.forEach(function (itemData) {
              var item = new db.Item({
                name: itemData.name,
                price: itemData.price
              });
              //find Place that contains the item
              db.Place.findOne({name: itemData.place}, function (err, foundPlace) {
                console.log('found place ' + foundPlace.name + ' for item ' + item.name);
                if (err) {
                  console.log(err);
                  return;
                }
                //assign the foundPlace to the specific item
                item.place = foundPlace;
                item.save(function(err, savedItem){
                  if (err) {
                    return console.log(err);
                  }
                  console.log('saved ' + savedItem.name + ' from ' + foundPlace.name);
                });
              });
              //find Category that contains the item
              db.Category.findOne({name: itemData.category}, function (err, foundCategory) {
                console.log('found category ' + foundCategory.name + ' for item ' + item.name);
                if (err) {
                  console.log(err);
                  return;
                }
                //assign the foundCategory to the specific item
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

//*************run following in the mongo console to complete the seed************////

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

////////////////////////*************************////////////////////////////////////
//
// cheesecake = db.categories.findOne({name: "Cheesecake"})
// poutine = db.categories.findOne({name: "Poutine"})
// lamb = db.categories.findOne({name: "Lamb Chops"})
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
