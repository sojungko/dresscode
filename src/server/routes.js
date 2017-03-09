const handlers = require('./controller/handlers');

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/api/user',
      handler: handlers.getUser,
    },
    {
      method: 'GET',
      path: '/api/',
      handler: handlers,
    },
    {
      method: 'GET',
      path: '/api/',
    },
  ],
};
