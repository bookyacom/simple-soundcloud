'use strict';
var debug    = require('debug')('soundcloud/user');
var filter   = require('lodash.filter');
var is       = require('is_js');
var _request = require('./request');

var getUserByName = function(clientId, name) {
  var limit = 100;
  var offset = 0;
  var regex = new RegExp('/' + name + '$', 'g');
  debug(regex, clientId);

  function getUser(scName) {
    return _request('users', {
      q: scName,
      client_id: clientId,
      linked_partitioning: 1,
      offset: offset,
      limit: limit
    })
    .then(function(response) {
      var users = response.collection;
      if (response.errors) {
        throw new Error(response.errors);
      }
      debug(users.length);

      users = filter(users, function(user) {
        return regex.test(user.permalink_url);
      });
      debug(users);

      // if user not found but there is a next url for pagination
      // query that
      if (!users.length && response.next_href) {
        offset += limit;
        return getUser(scName);
      }

      return users[0];
    });
  }

  return getUser(name);
};

var getUserById = function(clientId, id) {
  return _request('users/' + id + '.json', {
    client_id: clientId
  })
  .then(function(results){
    if (results.errors) {
        throw results.errors;
    }
    return results;
  });
};

var SoundCloudUser = function(clientId, name) {
  this.clientId = clientId;

  if (is.number(name)) {
    this.user = getUserById(clientId, name);
  } else {
    this.user = getUserByName(clientId, name);
  }

  this.getUserInfo = function(type, params) {
    var self = this;
    return this.user
      .then(function(user) {
        debug(user);
        if (!user) throw new Error('user not found');

        var id = user.id;
        params = params || {};
        params.client_id = self.clientId;

        return _request('users/' + id + '/' + type + '.json', params);
      })
      .then(function(results) {
        debug(results);
        return results;
      });
  };
};

SoundCloudUser.prototype.details = function() {
  return this.user
    .then(function(user) {
      return user;
    });
};

SoundCloudUser.prototype.tracks = function(params) {
  return this.getUserInfo('tracks', params);
};

SoundCloudUser.prototype.playlists = function(params) {
  return this.getUserInfo('playlists', params);
};

SoundCloudUser.prototype.followings = function(params) {
  return this.getUserInfo('followings', params);
};

SoundCloudUser.prototype.followers = function(params) {
  return this.getUserInfo('followers', params);
};

SoundCloudUser.prototype.comments = function(params) {
  return this.getUserInfo('comments', params);
};

SoundCloudUser.prototype.favorites = function(params) {
  return this.getUserInfo('favorites', params);
};

SoundCloudUser.prototype.groups = function(params) {
  return this.getUserInfo('groups', params);
};

SoundCloudUser.prototype.webProfiles = function(params) {
  return this.getUserInfo('web-profiles', params);
};

module.exports = SoundCloudUser;
