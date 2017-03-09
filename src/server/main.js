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

server.register([{ // register all your plugins
  register: require('hapi-postgres-connection'),
},
  Inert,
  Blipp,
], (err) => {
  if (err) {
    // handle plugin startup error
    console.log('Error : ', err);
    throw err;
  }
  server.start(() => {
    console.log(`Server running at ${server.info.uri}`);
  });
});
