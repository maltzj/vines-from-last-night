var Sequelize = require('sequelize')
, config = require('../../config/config');

console.log('config is ' + config);
var sequelize = new Sequelize(config.database.database, 
        config.database.username, config.database.password,
        config.database.options);

exports.sequelize = sequelize;
