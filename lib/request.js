'use strict';
var debug = require('debug')('soundcloud/request');
var template = require('lodash.template');
var request = require('request-promise');

var base = 'http://api.soundcloud.com';
var api = template(base + '/<%= path %>');

module.exports = function(path, qs) {
  debug(path);

  var url = api({
    path: path
  });

  return request({
    uri: url,
    json: true,
    useQuerystring: true,
    qs: qs,
    transform: function(body, response) {
      debug(decodeURI(response.req.path));

      return body;
    }
  });
};