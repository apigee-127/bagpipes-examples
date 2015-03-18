'use strict';

var debug = require('debug')('pipes');
var Yelp = require('yelp');
var util = require('util');

module.exports = function create(fittingDef) {

  var yelp = Yelp.createClient(fittingDef.config);

  return function yelp_search(context, cb) {

    var input = context.input;

    var options = {
      term: input.term,
      ll: util.format('%s,%s', input.latitude, input.longitude)
    };

    debug('yelp: %j', options);

    yelp.search(options, function(error, data) {

      if (error) { return cb(error); }
      if (data.error) { return cb(data.error); }

      cb(null, data.businesses);
    });
  }
};
