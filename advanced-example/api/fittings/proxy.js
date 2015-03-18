'use strict';

var request = require('request');
var debug = require('debug')('pipes');

module.exports = function create(fittingDef) {

  return function proxy(context, cb) {

    var req = context.request;
    var res = context.response;

    var proxyBase = context.inputs.baseUrl;
    var subPath = context.inputs.subPath;
    var proxyUrl = proxyBase + subPath;

    debug('proxying to: %s', proxyUrl);

    // This will bypass anything later in the pipe!
    req.pipe(request(proxyUrl)).pipe(res); // proxy all data (headers, query, body)
  }
};
