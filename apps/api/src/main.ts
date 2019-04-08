const express = require('express'),
db = require('./app/database/connect'),
app = express(),
  bodyParser = require('body-parser'),
  port = process.env.PORT || 3000;

// connect to database
db.connect();

app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const  routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route