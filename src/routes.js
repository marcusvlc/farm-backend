const express = require('express');
const FieldController = require('./controllers/FieldControlleer');
const Field = require('./models/Field');

const routes = express.Router();

// Field Endpoints
routes.post('/field', FieldController.store);

module.exports = routes;