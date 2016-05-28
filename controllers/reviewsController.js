var auth = require('../middleware/auth');
var db = require('../models'),
    User = db.User,
    Review = db.Review;

function index(req, res) {
  Review
    .find({})
    .populate('user')
    .exec(function(err, reviews){
      if (err || !reviews || !reviews.length) {
        return res.status(404).send({message: 'Reviews not found.'});
      }
      res.send(reviews);
    });
}

function create(req, res){
  db.Category.findById(req.params.categoryId, function(err, foundCategory){
    var new_review = new Review(req.body);
    // console.log("****", new_review)
    foundCategory.reviews.push(new_review._id)
    foundCategory.save(function(err, savedCategory) {
      res.send(savedCategory);  // responding with just the song, some APIs may respond with the parent object (Album in this case)
    });

    new_review.user = req.user_id;
    new_review.category = req.params.categoryId;
    new_review.save(function(err, new_review){
      // console.log(new_review);
      res.send(new_review);
    });
  })
  // console.log(req.body);
  // // console.log(req.body);

  // })
}

function show(req, res){
  Review
    .findById(req.params.id)
    .populate('user')
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
        console.log(review)
        return res.status(404).send({messsage: 'Failed to update review.'})
      }
      res.status(204).send();
    })
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
      res.status(204).send();
    });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  update: update,
  destroy: destroy
};
