'use strict';
var partial = require('lodash.partial');
var soundcloudUser = require('./lib/user');

module.exports = function(clientId) {
  var user = partial(soundcloudUser, clientId);

  return {
    User: user
  };
};