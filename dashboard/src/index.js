const express = require('express');
const app = express();
const config = require('./config.json');

require('./server.js')(app);

app.listen(config.port, () => {
  console.log(`Dashboard is running on port ${config.port}`);
});