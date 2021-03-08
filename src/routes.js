const express = require('express');
const FarmController = require('./controllers/FarmController');
const FieldController = require('./controllers/FieldControlleer');
const HarvestController = require('./controllers/HarvestController');
const MillController = require('./controllers/MillController');

const routes = express.Router();

// Field Endpoints
routes.post('/field', FieldController.store);
routes.get('/fields', FieldController.showAll);

// Mill Endpoints

routes.post('/mill', MillController.store);
routes.get('/mills', MillController.showAll);

// Harvest Endpoints

routes.post('/harvest', HarvestController.store);
routes.get('/harvests', HarvestController.showAll);

// Farm Endpoints

routes.post('/farm', FarmController.store);
routes.get('/farms', FarmController.showAll);

module.exports = routes;