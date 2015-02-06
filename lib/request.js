'use strict';
var bluebird = require('bluebird');
var debug = require('debug')('soundcloud/request');
var template = require('lodash.template');
var request = bluebird.promisify(require('request'));

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
    qs: qs
  }).spread(function(response, body) {
    debug(decodeURI(response.req.path));

    return body;
  });
};