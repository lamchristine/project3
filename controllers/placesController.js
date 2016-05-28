// var auth = require('../middleware/auth');
// var db = require('../models'),
//     Place = db.Place,
//     Review = db.Review,
//     Item = db.Item;
//
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
//
//
// module.exports = {
//   index: index,
// };
