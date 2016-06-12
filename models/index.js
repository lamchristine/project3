var mongoose = require('mongoose');
mongoose.connect(   process.env.MONGODB_URI ||
                  process.env.MONGOHQ_URL ||
                  'mongodb://localhost/Project3App');


module.exports = {
  User: require('./user'),
  Review: require('./review'),
  Place: require('./place'),
  Item: require('./item'),
  Category: require('./category')
};
