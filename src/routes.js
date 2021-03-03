const express = require('express');
const FieldController = require('./controllers/FieldControlleer');
const MillController = require('./controllers/MillController');
// const Field = require('./models/Field');

const routes = express.Router();

// Field Endpoints
routes.post('/field', FieldController.store);

// Mill Endpoints

routes.post('/mill', MillController.store);

module.exports = routes;