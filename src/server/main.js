require('dotenv').config();
const Hapi = require('hapi');
const Blipp = require('blipp');
const HPC = require('hapi-postgres-connection');

const routes = require('./routes').routes;

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.register([
  HPC,
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
