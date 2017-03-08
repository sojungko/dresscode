const Hapi = require('hapi');
const server = new Hapi.Server(3000);

server.register({
  register: require('hapi-postgres-connection')
}, function (err) {
  if (err) {
    // handle plugin startup error 
  }
});

server.register(Blipp, (err) => {
  server.route([
      {
          method: 'GET',
          path: '/api/user',
          handler: function (request, reply) {

              return reply(null);
          }
      },

})

server.start(function() {
    console.log('Hapi is listening to http://localhost:3000');
});
