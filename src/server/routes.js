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
      method: 'GET',
      path: '/api/',
    },
  ],
};
