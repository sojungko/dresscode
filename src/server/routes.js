const handlers = require('./controller/handlers');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/api/user/{username}',
      handler: handlers.getUser,
    },
    {
      method: 'POST',
      path: '/api/user/post',
      handler: handlers.postUser,
    },
    {
      method: 'POST',
      path: '/api/user/signin',
      handler: handlers.signInUser,
    },
    {
      method: 'POST',
      path: '/api/user/post/profilepic',
      handler: handlers.setProfilePic,
    },
  ],
};
