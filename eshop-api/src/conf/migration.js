const migration = require('mysql-migrations');
const Database = require('./Database');

const database = new database();

migration.init(database.connection, __dirname + '/migrations');