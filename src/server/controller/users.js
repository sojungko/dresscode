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

  postUser: (req, reply) => {
    const { username, name, email, password } = JSON.parse(req.payload);
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.log('Error hashing password : ', err);
      } else {
        User.create({ username, name, email, password: hash }).then((user) => {
          console.log('user saved: ', user);
          const token = jwt.sign(user.dataValues.username, process.env.JWT_SECRET);
          const userObj = { id: user.id, username, name, email, token };
          return reply(userObj).code(201);
        });
      }
    });
  },

  signInUser: (req, reply) => {
    const { username, password } = JSON.parse(req.payload);
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

  updateUser: (req, reply) => {
    /*
    Queries using username and updates user's name and bio.
    Profile pictures get own update method.
    See setProfilePic and removeProfilePic.
    */
    const { username, name, bio } = JSON.parse(req.payload);
    User.findAll({ where: { username } })
      .then(user => user.update({ name, bio }))
      .then(user => reply(user).code(201));
  },

  followUser: (req, reply) => {
    /*
    Queries using username and follows target.
    */
    const { username, target } = JSON.parse(req.payload);
    User.findAll({ where: { username } })
      .then(user => user.setDataValue(user.getDataValue('following').push(target)))
      .then(() => reply().code(201));
  },

  unfollowUser: (req, reply) => {
    /*
    Queries using username and unfollows target.
    */
    const { username, target } = JSON.parse(req.payload);
    User.findAll({ where: { username } })
      .then((user) => {
        let following = user.getDataValue('following');
        const targetIndex = following.indexOf(target);
        following = following.splice(targetIndex, 1);
        user.setDataValue(following);
      })
      .then(() => reply().code(200));
  },

  setProfilePic: (req, reply) => {
    const { username, uri } = JSON.parse(req.payload);
    console.log(JSON.parse(req.payload));
    User.findAll({ where: { username } })
      .then(user => user.setDataValue('profilePic', uri))
      .then(() => reply(uri).code(201));
  },

  removeProfilePic: (req, reply) => {
    const { username } = JSON.parse(req.payload);
    User.findAll({ where: { username } })
      .then(user => user.setDataValue('profilePic', null))
      .then(() => reply().code(200));
  },

};
