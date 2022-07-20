const AuthenticationHandler = require('./handler');
const routes = require('./routes');

module.exports = {
    name: 'authentication',
    version: '1.0.0',
    register: async (server, {productsService, storageService, validator}) => {
        const handler = new AuthenticationHandler(productsService, storageService, validator);
    server.route(routes(handler));
  },
};