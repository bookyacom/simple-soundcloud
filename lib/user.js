'use strict';
var debug    = require('debug')('soundcloud/user');
var filter   = require('lodash.filter');
var is       = require('is_js');
var _request = require('./request');

var getUserByName = function(clientId, name) {
  var regex = new RegExp('/' + name + '$', 'g');
  debug(regex, clientId);

  return _request('users', {
      q: name,
      client_id: clientId
    })
    .then(function(users) {
      if (users.errors) {
        throw new Error(users.errors);
      }

      debug(users.length);

      var user = filter(users, function(user) {
        return regex.test(user.permalink_url);
      });

      debug(user);

      return user[0];
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

  this.getUserInfo = function(type) {
    var self = this;
    return this.user
      .then(function(user) {
        debug(user);
        var id = user.id;
        return _request('users/' + id + '/' + type + '.json', {
          client_id: self.clientId
        });
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

SoundCloudUser.prototype.tracks = function() {
  return this.getUserInfo('tracks');
};

SoundCloudUser.prototype.playlists = function() {
  return this.getUserInfo('playlists');
};

SoundCloudUser.prototype.followings = function() {
  return this.getUserInfo('followings');
};

SoundCloudUser.prototype.followers = function() {
  return this.getUserInfo('followers');
};

SoundCloudUser.prototype.comments = function() {
  return this.getUserInfo('comments');
};

SoundCloudUser.prototype.favorites = function() {
  return this.getUserInfo('favorites');
};

SoundCloudUser.prototype.groups = function() {
  return this.getUserInfo('groups');
};

SoundCloudUser.prototype.webProfiles = function() {
  return this.getUserInfo('web-profiles');
};

module.exports = SoundCloudUser;