const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  port = process.env.API_APP_ENV || 8888;

const apiRoute = require('./controllers/api'),
  middlewares = require('./middleware/common-middleware');

app.use(bodyParser.json());
app.use(middlewares.setDefaultHeaders);

app.get('/', (req, res) => {
  res.send('This is the node api app !');
});

// set common response headers for all incoming requests
app.use('/api', apiRoute);

if (!module.parent) {
  app.listen(port, () => console.log('App booted'));
}

module.exports = app;
