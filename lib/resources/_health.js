var express = require('express'),
  info = require('../../package.json'),
  health = {
    status: 'ok',
    name: info.name,
    version: info.version
  },
  router = module.exports = express.Router();

router.get('/', function (req, res, next) {
  res.send(health);
});
