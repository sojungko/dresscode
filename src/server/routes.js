const Users = require('./controller/users');
const Pictures = require('./controller/pictures');
const Comments = require('./controller/comments');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/api/user/{username}',
      handler: Users.getUser,
    },
    {
      method: 'POST',
      path: '/api/user/post',
      handler: Users.postUser,
    },
    {
      method: 'POST',
      path: '/api/user/signin',
      handler: Users.signInUser,
    },
    {
      method: 'POST',
      path: '/api/user/profilepic',
      handler: Users.setProfilePic,
    },
  ],
};
