const Sequelize = require('sequelize');
const dbConfiguration = require('../config/database');
const Field = require('../models/Field');
const Farm = require('../models/Farm');
const Harvest = require('../models/Harvest');
const Mill = require('../models/Mill');

const connection = new Sequelize(dbConfiguration);

Field.init(connection);
Farm.init(connection);
Harvest.init(connection);
Mill.init(connection);

//Field.associate(connection.models);

module.exports = connection;