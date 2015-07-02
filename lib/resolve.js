'use strict';

var debug    = require('debug')('soundcloud/resolve');
var request = require('./request');

module.exports = function(clientId, url) {
  return request('resolve', {
    url: url,
    client_id: clientId
  }).then(function(user) {
    // should get a new user
    return user;
  });
};
