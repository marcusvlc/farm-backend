const Sequelize = require('sequelize');
const dbConfiguration = require('../config/database')
const Field = require('../models/Field')

const connection = new Sequelize(dbConfiguration);

Field.init(connection)

//Field.associate(connection.models);

module.exports = connection;