const express = require('express');
const routes = require('./routes');
require('./database')

// App Definiton
const app = express();

// App configurations
app.use(express.json());
app.use(routes);

// App port configuration
app.listen(3333);