const Hapi = require('hapi');
const Inert = require('inert');
const Blipp = require('blipp');

require('dotenv').config();

const server = new Hapi.Server();
server.connection({ port: 8000, host: 'localhost' });

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    const email = 'test@test.net';
    const select = `SELECT * FROM people WHERE ${email}`;
    request.pg.client.query(select, (err, result) => {
      console.log(err, result);
      return reply(result.rows[0]);
    });
  },
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
