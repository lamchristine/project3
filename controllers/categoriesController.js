var auth = require('../middleware/auth');
var db = require('../models'),
  Category = db.Category,
  Review = db.Review,
  Place = db.Place,
  Item = db.Item;

function index(req, res) {
  Category
    .find({})
    .populate('reviews')
    .populate('places')
    .populate('items')
    .exec(function(err, categories){
      if (err || !categories || !categories.length) {
        return res.status(404).send({message: 'Categories not found.'});
      }
      res.send(categories);
    });
}

function show(req, res){
  Category
    .findById(req.params.id)
    .populate({
      path: 'reviews',
      populate: {path: 'item',
        populate: {path: 'place'}
      }
    })

    .populate({
      path: 'reviews',
      populate: {path: 'user'}
    })
    // .populate('places')
    .populate({
      path: 'items',
      populate: {path: 'place'}
    })
    .exec(function(err, found_category){
      if (err || !found_category) {
        return res.status(404).send({message: 'Category not found.'})
      }
      res.send(found_category);
    })
}


module.exports = {
  index: index,
  show: show,
};
