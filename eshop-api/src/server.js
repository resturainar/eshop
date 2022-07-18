require('dotenv').config();
const Hapi = require('@hapi/hapi');

//authentication
const authentication = require('./api/authentication');
const Database = require('./conf/Database');
const AuthenticationService = require('./services/mysql/AuthenticationService');
const AuthenticationValidator = require('./validator/authentication');

const init = async () => {
  const database = new Database();
  const authenticationServive = new AuthenticationService(database);

    const server = Hapi.server({
      host: process.env.HOST,
      port: process.env.PORT,
      routes: {
        cors: {
          origin: ['*'],
        },
      },
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: () => ({
          name: 'Restu Raina Rahmah',
        }),
      });

      //defines internal plugins
      await server.register([
        {
          plugin: authentication,
          option:{
            service: AuthenticationService,
            validation: AuthenticationValidator,
          },
        },
      ]);

    // extension
  server.ext('onPreResponse', (request, h) => {
    const {response} = request;

    if (response instanceof ClientError) {
      const newResponse = h.response({
        status: 'fail',
        message: response.message,
      });
      newResponse.code(response.statusCode);
      return newResponse;
    }

    console.log(response);

    return h.continue;
  });
    
    await server.start();
    console.log(`Server running at ${server.info.uri}`);

  };

  init();