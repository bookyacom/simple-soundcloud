'use strict';
var partial           = require('lodash.partial');
var soundcloudUser    = require('./lib/user');
var soundcloudResolve = require('./lib/resolve');

module.exports = function(clientId) {
  var user    = partial(soundcloudUser, clientId);
  var resolve = partial(soundcloudResolve, clientId);

  return {
    User: user,
    resolve: resolve
  };
};
