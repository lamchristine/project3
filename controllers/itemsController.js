var auth = require('../middleware/auth');
var db = require('../models'),
    Place = db.Place,
    Review = db.Review,
    Item = db.Item;

function index(req, res) {
  Item
    .find({})
    .populate('reviews')
    .populate('place')
    .exec(function(err, items){
      if (err || !items || !items.length) {
        return res.status(404).send({message: 'Items not found.'});
      }
      res.send(items);
    });
}

function show(req, res){
  Item
    .find(req.params.id)
    .populate('reviews')
    .populate('place')
    .exec(function(err, found_item){
      if (err || !found_item) {
        return res.status(404).send({message: 'Item not found.'});
      }
      res.send(found_item);
    });
}



module.exports = {
  index: index,
  show: show,
};
