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
//
// function create(req, res){
//   Item
//     .findById(req.params.itemId)
//     .populate({
//       path: 'reviews',
//       populate: {path: 'user'}
//     })
//     .exec(function (err, foundItem) {
//       // saving the new review in reviews and assigning reference to user id and item id
//       var new_review = new Review(req.body);
//       console.log("**req_user**", req.user_id);
//       new_review.item = foundItem;
//       new_review.user = req.user_id;
//       new_review.save(function(err, new_review){
//         res.send(new_review);
//       });
//       //pushing new_review_id to array of reviews in category
//       var cat_id = foundItem.category;
//       db.Category.findById(cat_id, function (err, foundCat) {
//         foundCat.reviews.push(new_review);
//         foundCat.save();
//       });
//       //pushing new_review_id to array of reviews in item
//       foundItem.reviews.push(new_review);
//       foundItem.save();
//     });
//   }


function create(req, res){
  db.Item.findById(req.params.itemId, function (err, foundItem) {
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
    db.Category.findById(cat_id, function (err, foundCat) {
      foundCat.reviews.push(new_review);
      foundCat.save();
    });
    //pushing new_review_id to array of reviews in item
    foundItem.reviews.push(new_review);
    foundItem.save();

    //finding newly created review and populating with user and item
    db.User.findById(req.user_id, function (err, foundUser) {
      // console.log("roundReview", foundUser);
      foundUser.reviews.push(new_review);
      foundUser.save()
      console.log("foundUser****", foundUser);
    });
  });

}
//
// //   db.Category.findById(req.params.itemId, function(err, foundCategory){
//
//     var new_item = new Item(req.body);
//       new_item.place = req.body.place;
//       new_item.category = req.body.category;
//       new_item.save();
//     console.log("**new_item***", new_item);
//
//     var new_review = new Review(req.body);
//
//     //saving the review id in Category
//     foundCategory.reviews.push(new_review._id);
//     foundCategory.save();
//
//     //saving the new review in reviews and assigning reference to user id and category id
//     new_review.item = new_item.id;
//     new_review.user = req.user_id;
//     new_review.category = req.params.categoryId;
//     new_review.save(function(err, new_review){
//
//       res.send(new_review);
//     });
//   });
// }


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

// function update(req, res){
//   var query = {
//     _id: req.params.id
//   };
//
//   if (req.user_id) {
//     query.user = req.user_id; //if user id has been attached to request,
//   }
//
//   Review
//     .findOneAndUpdate(query, req.body)
//     .exec(function(err, review){
//       if (err || !review) {
//         console.log(review)
//         return res.status(404).send({messsage: 'Failed to update review.'})
//       }
//       res.status(204).send();
//     })
// }
//
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
      res.send(review);
    });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  // update: update,
  destroy: destroy
};
