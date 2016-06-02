var auth = require('../middleware/auth');
var db = require('../models'),
    User = db.User,
    Review = db.Review,
    Place = db.Place,
    Category = db.Category,
    Item = db.Item;

function index(req, res) {
  Review
    .find({})
    .populate('user')
    .populate('item')
    .populate('place')
    .populate('category')
    .exec(function(err, reviews){
      if (err || !reviews || !reviews.length) {
        return res.status(404).send({message: 'Reviews not found.'});
      }
      res.send(reviews);
    });
}

function create(req, res){
  Item
    .findById(req.params.itemId)
    .populate('category')
    .exec(function (err, foundItem) {
    // saving the new review in reviews and assigning reference to user id and item id
    var new_review = new Review(req.body);
    // console.log("**req_user**", req.user_id);
    new_review.item = foundItem;
    new_review.user = req.user_id;
    new_review.save(function(err, new_review){
      res.send(new_review);
    });
    //pushing new_review_id to array of reviews in category
    var cat_id = foundItem.category;
    Category
      .findById(cat_id)
      .populate('reviews')
      .exec(function (err, foundCat) {
        console.log("***",foundCat)
      foundCat.reviews.push(new_review);
      foundCat.save();
    });
    //pushing new_review_id to array of reviews in item
    foundItem.reviews.push(new_review);
    foundItem.save();

    //finding newly created review and populating with user and item
    User
        .findById(req.user_id)
        .populate('reviews')
        .exec(function (err, foundUser) {
          // console.log("roundreq", req.user_id);
          foundUser.reviews.push(new_review);
          foundUser.save()
          // console.log("foundUser****", foundUser);
        });
  });
}


function show(req, res){
  Review
    .findById(req.params.id)
    .populate('user')
    .populate('item')
    .populate('place')
    .populate('category')
    .exec(function(err, found_review){
      if (err || !found_review) {
        return res.status(404).send({message: 'Review not found.'});
      }

      res.send(found_review);
    });
}

function update(req, res){
  var query = {
    _id: req.params.id
  };

  if (req.user_id) {
    query.user = req.user_id; //if user id has been attached to request,
  }

  Review
    .findOneAndUpdate(query, req.body)
    .exec(function(err, review){
      if (err || !review) {
        console.log(review);
        return res.status(404).send({messsage: 'Failed to update review.'});
      }
         res.status(404).send();
    });
}

function destroy(req, res){
  var query = {
    _id: req.params.id
  };

  if (req.user_id) {
    query.user = req.user_id;
  }

  Review
    .findOneAndRemove(query)
    .exec(function(err, review){
      if (err || !review) {
        return res.status(404).send({messsage: 'Failed to delete review.'});
      }
      console.log("****Removed from db", review)
      res.send(review);
    });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
};
