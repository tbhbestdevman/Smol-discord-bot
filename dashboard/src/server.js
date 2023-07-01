const express = require('express');
const app = express();
const config = require('./config.json');
const routeHandler = require('./routes/routeHandler');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use routeHandler
app.use('/', routeHandler);

// Start the server
app.listen(config.port, () => {
  console.log(`Dashboard is running on port ${config.port}`);
});