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



module.exports = {
  index: index,
};
