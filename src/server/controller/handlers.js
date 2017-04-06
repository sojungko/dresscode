const db = require('../db/config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const md5 = require('md5');

module.exports = {

/* -- User Methods -- */
  getUser: (req, reply) => {
    // get user profile with req.params.username
    // query db with username
    // if exists, send back user profile
    reply();
  },

  postUser: (req, reply) => {
    const { username, name, email, password } = JSON.parse(req.payload);
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.log('Error hashing password : ', err);
      } else {
        db.User.create({ username, name, email, password: hash }).then(user => {
          console.log('user saved: ', user);
          const token = jwt.sign(user.dataValues.username, process.env.JWT_SECRET);
          const userObj = { username, name, email, token };
          return reply(userObj).code(201);
        });
      }
    });
  },

  signInUser: (req, reply) => {
    const { username, password } = JSON.parse(req.payload);
    db.User.findAll({
      where: { username },
    })
      .then((user) => {
        console.log(user);
        bcrypt.compare(password, user[0].dataValues.password, (err, res) => {
          if (err) {
            console.log('Error comparing passwords : ', err);
          } else {
            const { name, profilePic } = user[0];
            const token = jwt.sign(user[0].dataValues.username, process.env.JWT_SECRET);
            return reply({ token, username, name, profilePic }).code(201);
          }
        });
      });
  },

  updateUser: (req, reply) => { 
  },

  followUser: (req, reply) => {
    reply();
  },

  unfollowUser: (req, reply) => {
    reply();
  },

  setProfilePic: (req, reply) => {
    console.log(JSON.parse(req.payload));
    reply({ hello: 'hello' });
  },

  remoteProfilePic: (req, reply) => {
    reply();
  },

/* -- Picture Methods -- */
  postPic: (req, reply) => {
    // access camera or camera roll
    reply();
  },

  deletePic: (req, reply) => {
    reply();
  },

  likePic: (req, reply) => {
    reply();
  },

  dislikePic: (req, reply) => {
    reply();
  },

  unlikePic: (req, reply) => {
    reply();
  },

/* -- Comment Methods -- */
  postComment: (req, reply) => {
    reply();
  },

  deleteComment: (req, reply) => {
    reply();
  },
};
