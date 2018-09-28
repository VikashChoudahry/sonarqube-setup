const express = require('express'),
  router = express.Router(),
  v1Router = require('./v1');

router.use('/v1', v1Router);

module.exports = router;
