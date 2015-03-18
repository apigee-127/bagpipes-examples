'use strict';

var a127 = require('a127-magic');
var express = require('express');
var app = express();

module.exports = app; // for testing

// initialize a127 framework
a127.init(function(config) {

  // include a127 middleware
  app.use(a127.middleware(config));

  // set up swagger pipes
  app.use(createSwaggerPipes(config));

  // error handler to emit errors as a json string
  app.use(function(err, req, res, next) {
    if (err && typeof err === 'object') {
      Object.defineProperty(err, 'message', { enumerable: true }); // include message property in response
      res.end(JSON.stringify(err));
    }
    next(err);
  });

  var port = process.env.PORT || 10010;
  app.listen(port);

  console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
});

function createSwaggerPipes(config) {

  var swaggerPipes = require('swagger-pipes');
  var magic = config['a127.magic'];
  var pipesDefs = magic.swaggerObject['x-swagger-pipes'];
  var path = require('path');
  var pipesConfig = {
    userControllersDir: magic.controllers.controllers,
    userFittingsDir: path.resolve(__dirname, 'api/fittings'),
    userViewsDir: path.resolve(__dirname, 'api/fittings')
  };
  return swaggerPipes.create(pipesDefs, pipesConfig).connectMiddleware();
}
