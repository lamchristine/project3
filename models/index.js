var mongoose = require('mongoose');
mongoose.connect( 'mongodb://localhost/Project3App' ||
                  process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL );


module.exports = {
  User: require('./user'),
  Review: require('./review'),
  Place: require('./place'),
  Category: require('./category'),
};
