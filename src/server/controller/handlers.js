const db = require('../db/config');

module.exports = {

  getUser: (req, reply) => {
    // get user profile with req.params.username
    // query db with username
    // if exists, send back user profile, pictures, comments...
    reply();
  },

  postUser: (req, reply) => {
    // const { firstName, lastName, email, password } = req;
    // hash password
    // save to database
    // send back 201 response
    reply();
  },
};
