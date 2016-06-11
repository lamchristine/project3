var mongoose = require('mongoose');
mongoose.connect( 'mongodb://127.0.0.1:27017/Project3App' ||
                  process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL );


module.exports = {
  User: require('./user'),
  Review: require('./review'),
  Place: require('./place'),
  Item: require('./item'),
  Category: require('./category')
};
