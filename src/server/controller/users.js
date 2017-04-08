const User = require('../db/config').User;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {

/* -- User Methods -- */
  getUser: (req, reply) => {
    // get user profile with req.params.username
    // query db with username
    // if exists, send back user profile
    const username = req.params.username;
    User.findAll({ where: { username } })
      .then(user => reply(user).code(200));
  },

  postUser: ({ payload: { username, name, email, password } }, reply) => {
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.log('Error hashing password : ', err);
      } else {
        User.create({ username, name, email, password: hash }).then((user) => {
          console.log('user saved: ', user);
          const token = jwt.sign(user.dataValues.username, process.env.JWT_SECRET);
          const userObj = { id: user.id, username, name, email, token };
          console.log(userObj);
          return reply(userObj).code(201);
        });
      }
    });
  },

  signInUser: ({ payload: { username, password } }, reply) => {
    User.findAll({ where: { username } })
      .then((user) => {
        console.log(user);
        bcrypt.compare(password, user[0].dataValues.password, (err) => {
          if (err) {
            console.log('Error comparing passwords : ', err);
          } else {
            const { id, name, profilePic } = user[0];
            const token = jwt.sign(user[0].dataValues.username, process.env.JWT_SECRET);
            return reply({ id, token, username, name, profilePic }).code(200);
          }
        });
      });
  },

  updateUser: ({ payload: { username, name, bio } }, reply) => {
    /*
    Queries using username and updates user's name and bio.
    Profile pictures get own update method.
    See setProfilePic and removeProfilePic.
    */
    User.findAll({ where: { username } })
      .then(user => user.update({ name, bio }))
      .then(user => reply(user).code(201));
  },

  followUser: ({ payload: { username, target } }, reply) => {
    /*
    Queries using username and follows target.
    */
    User.findAll({ where: { username } })
      .then(user => user.setDataValue(user.getDataValue('following').push(target)))
      .then(() => reply().code(201));
  },

  unfollowUser: ({ payload: { username, target } }, reply) => {
    /*
    Queries using username and unfollows target.
    */
    User.findAll({ where: { username } })
      .then((user) => {
        let following = user.getDataValue('following');
        const targetIndex = following.indexOf(target);
        following = following.splice(targetIndex, 1);
        user.setDataValue(following);
      })
      .then(() => reply().code(200));
  },

  setProfilePic: ({ payload: { username, uri } }, reply) => {
    User.findAll({ where: { username } })
      .then(user => user.setDataValue('profilePic', uri))
      .then(() => reply(uri).code(201));
  },

  removeProfilePic: ({ payload: { username } }, reply) => {
    User.findAll({ where: { username } })
      .then(user => user.setDataValue('profilePic', null))
      .then(() => reply().code(200));
  },

};
