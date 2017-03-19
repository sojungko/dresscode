const db = require('../db/config');

module.exports = {

/* -- User Methods -- */
  getUser: (req, reply) => {
    // get user profile with req.params.username
    // query db with username
    // if exists, send back user profile
    reply();
  },

  postUser: (req, reply) => {
    // const { username, name, email, password } = req;
    // hash password
    // save to database
    // send back 201 response
    reply();
  },

  followUser: (req, reply) => {
    reply();
  },

  unfollowUser: (req, reply) => {
    reply();
  },

  setProfilePic: (req, reply) => {
    reply();
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
