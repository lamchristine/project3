// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    auth = require('./middleware/auth'),
    controllers = require("./controllers");

// require and load dotenv
require('dotenv').load();

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files from public folder
app.use(express.static(__dirname + '/public')); //uses middleware 'static'?

// log api requests
app.use(logger('dev'));

/*
 * Auth Routes
 */

var usersCtrl = controllers.users;
app.post('/auth/signup', usersCtrl.signup);
app.post('/auth/login', usersCtrl.login);
app.get('/api/me', auth.ensureAuthenticated, usersCtrl.showCurrentUser); //auth.ensureAuthenticated checks to see if you are who you are, if so, then go to usersCtrl.showCurrentUser
app.put('/api/me', auth.ensureAuthenticated, usersCtrl.updateCurrentUser);
app.get('/api/users/:id', auth.ensureAuthenticated, usersCtrl.showUserProfile); //auth.ensureAuthenticated checks to see if you are who you are, if so, then go to usersCtrl.showCurrentUser

/*
 * API Routes
 */

var reviewsCtrl = controllers.reviews;
app.get('/api/reviews', reviewsCtrl.index);
// app.post('/api/reviews', auth.ensureAuthenticated, reviewsCtrl.create);
// app.get('/api/reviews/:id', reviewsCtrl.show);
// app.put('/api/reviews/:id', auth.ensureAuthenticated, reviewsCtrl.update);
// app.delete('/api/reviews/:id', auth.ensureAuthenticated, reviewsCtrl.destroy);


var categoriesCtrl = controllers.categories;
app.get('/api/categories', categoriesCtrl.index);
app.get('/api/categories/:id', categoriesCtrl.show);


var itemsCtrl = controllers.items;
app.get('/api/items/:id', itemsCtrl.show);
app.post('/api/items/:itemId/reviews', auth.ensureAuthenticated, reviewsCtrl.create);

//
//



/*
 * Catch All Route
 */
app.get(['/', '/signup', '/login', '/logout', '/profile', '/reviews*', '/categories*'], function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * Listen on localhost:3000
 */
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('server started on port ', port);
});
