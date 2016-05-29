var auth = require('../middleware/auth');
var db = require('../models'),
    Place = db.Place;
    // Review = db.Review;
    // Item = db.Item;

// function index(req, res) {
//   Place
//     .find({})
//     .populate('category')
//     .populate('review')
//     .exec(function(err, places){
//       if (err || !places || !places.length) {
//         return res.status(404).send({message: 'Places not found.'});
//       }
//       res.send(places);
//     });
// }
//
  function show(req, res){
    console.log("***", req.params.id);
    Place
      .findById(req.params.id)
      // .populate('reviews')
      // .populate('places')
      .exec(function(err, found_Place){
        if (err || !found_Place) {
          return res.status(404).send({message: 'Place not found.'});
        }

        res.send(found_Place);
      });
  }



module.exports = {
  show: show,
};
