'use strict';
var debug    = require('debug')('soundcloud/user');
var filter   = require('lodash.filter');
var is       = require('is_js');
var _request = require('./request');

var getUserByName = function(clientId, name) {
  return _request('resolve', {
    url: 'http://soundcloud.com/' + name,
    client_id: clientId,
  })
  .then(function(response) {
    debug('response', response);
    if (response.errors) {
      throw new Error(response.errors);
    }
    return response;
  });
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
