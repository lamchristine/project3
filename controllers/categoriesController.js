var auth = require('../middleware/auth');
var db = require('../models'),
    Place = db.Place,
    Review = db.Review,
    Category = db.Category;

function index(req, res) {
  Category
    .find({})
    .populate('place')
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
    .populate('review')
    .populate('place')
    .exec(function(err, found_post){
      if (err || !found_post) {
        return res.status(404).send({message: 'Post not found.'})
      }

      res.send(found_post);
    })
}



module.exports = {
  index: index,
  show: show, 
};
