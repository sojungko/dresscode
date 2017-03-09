const Hapi = require('hapi');
const Blipp = require('blipp');
const routes = require('./routes');

const server = new Hapi.Server(3000);

server.register({
  register: require('hapi-postgres-connection')
}, (err) => {
  if (err) {
    // handle plugin startup error
  }
});

server.register(Blipp, () => {
  server.route(routes);
});

server.start(function() {
    console.log('Hapi is listening to http://localhost:3000');
});
