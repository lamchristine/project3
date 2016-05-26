var jwt = require('jwt-simple'), //for processing jwt
    moment = require('moment'); //for dates

/*
* Login Required Middleware
*/
function ensureAuthenticated(req, res, next) { //next is a function, it's all good, keep going, move on to next step
  if (!req.headers.authorization) { //looking for authorizationi in header
    return res.status(401).send({ message: 'Please make sure your request has an Authorization header.' });
  }

  var token = req.headers.authorization.split(' ')[1];
  var payload = null;

  try {
    payload = jwt.decode(token, process.env.TOKEN_SECRET);  //if it works then u get payload
  }
  catch (err) {
    return res.status(401).send({ message: err.message }); //if u messed with jwt, denied
  }
  if (payload.exp <= moment().unix()) {  //checking to see if jwt is expired
    return res.status(401).send({ message: 'Token has expired.' });
  }
  req.user_id = payload.user_id; //attaching user id to request
  next(); //express method
}

/*
* Generate JSON Web Token
*/
function createJWT(user) {
  var payload = {
    user_id: user._id, // required by satellizer
    displayName: user.displayName, //options
    email: user.email, //options
    iat: moment().unix(), //current time
    exp: moment().add(14, 'days').unix() //expiration date
  };
  return jwt.encode(payload, process.env.TOKEN_SECRET); //encoding jwt with secret token
}

module.exports = {
  ensureAuthenticated: ensureAuthenticated,
  createJWT: createJWT
};
