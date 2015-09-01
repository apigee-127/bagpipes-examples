'use strict';

var SwaggerConnect = require('swagger-connect');
var app = require('connect')();
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

// set security handlers
config.swaggerSecurityHandlers = {
  oauth2: function securityHandler1(req, authOrSecDef, scopesOrApiKey, cb) {
    cb();
  }
};

SwaggerConnect.create(config, function(err, swaggerConnect) {
  if (err) { throw err; }

  // install middleware
  swaggerConnect.register(app);

  var port = process.env.PORT || 10010;
  app.listen(port);

  console.log('try this:\ncurl http://127.0.0.1:' + port + '/travel?address=San%20Jose');
});
