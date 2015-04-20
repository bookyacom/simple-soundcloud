'use strict';
var debug   = require('debug')('soundcloud/request');
var request = require('request-promise');
var base    = 'http://api.soundcloud.com';

module.exports = function(path, qs) {
  debug(path);

  var url = base + '/' + path;

  return request({
    uri            : url,
    json           : true,
    useQuerystring : true,
    qs             : qs,
    transform      : function(body, response) {
      debug(decodeURI(response.req.path));

      return body;
    }
  });
};