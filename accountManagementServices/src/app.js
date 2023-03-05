const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

// Adding Middlewares - Cors
app.use(cors());
app.use(bodyparser.json());

// Adding required connection
require('../connections/dbConnection');

// Port No and API
const port = process.env.port || 3200;
const usersApi = '/api/users';
const privilegesApi = '/api/privileges';

// Routes
const createUser = require('../routes/userServicesRoutes/createUser');

app.use(`${usersApi}/createUser`, createUser);

app.listen(port, () => {
    console.log(`Connection has been started at port: ${port}`);
});

module.exports = app;
