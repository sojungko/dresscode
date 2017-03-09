const Hapi = require('hapi');
const Blipp = require('blipp');
const routes = require('./routes');

const server = new Hapi.Server(3000);

server.register([{ // register all your plugins
  register: require('hapi-postgres-connection'),
},
  Blipp,
], (err) => {
  if (err) {
    console.log('Error : ', err);
    throw err;
  }

  server.route(routes);

  server.start(() => {
    console.log(`Server running at ${server.info.uri}`);
  });
});
