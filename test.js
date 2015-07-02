'use strict';

var tap = require('tap');
var proxyquire = require('proxyquire');
var bluebird = require('bluebird');

var test = tap.test;
var scId = '123';
var scName = 'alexis'; // user id = 1

test('#simple soundcloud unit tests', function(t) {

  t.test('clientId as first parameter', function(st) {
    var SC = proxyquire('./', {
      './lib/user': function(id, name) {
        st.equal(scId, id);
        st.equal(scName, name);
        st.end();
      }
    });
    var sc = SC(scId);
    var user = new sc.User(scName);
  });
});

test('#simple sound cloud user apis', function(t) {
  t.test('test constructor', function(st) {
    var ScUser = proxyquire('./lib/user', {
      './request': function(path, qs) {
          st.equal('users', path);
          st.equal(scId, qs.client_id);
          st.equal(scName, qs.q);
          st.end();
          return bluebird.resolve({});
      }
    });
    var user = new ScUser(scId, scName);
  });

  t.test('test user details', function(st) {
    var ScUser = proxyquire('./lib/user', {
      './request': function(path, qs) {
          return bluebird.resolve([{
            id: 123
          }]);
      }
    });

    var user = new ScUser(scId, scName);

    user.details()
      .then(function(user) {
        st.notOk(user);
        st.end();
      });
  });

  t.test('test user details', function(st) {
    var errorMessage = 'error';
    var ScUser = proxyquire('./lib/user', {
      './request': function(path, qs) {
          return bluebird.resolve({
            errors: errorMessage
          });
      }
    });

    var user = new ScUser(scId, scName);

    user.details()
      .catch(function(error) {
        st.type(error, "object");
        st.equal(errorMessage, error.message);
        st.end();
      });
  });

  t.test('test tracks', function(st) {
    var ScUser = proxyquire('./lib/user', {
      './request': function(path, qs) {
        if(path === 'users') {
          return bluebird.resolve([
            {
            id: 12,
            permalink_url: 'http://' + scName
          }]);
        } else {
          return bluebird.resolve([]);
        }
      }
    });
    var user = new ScUser(scId, scName);

    user.tracks()
      .then(function(results) {
        st.equal(Array.isArray(results), true);
        st.end();
      });
  });

  t.test('test resolve api', function(st) {
    var resolve = proxyquire('./lib/resolve', {
      './request': function(path, qs) {
        st.ok(path, 'path found');
        st.ok(qs, 'qs found');
        st.equal(path, 'resolve');
        return bluebird.resolve({
          id: 1
        });
      }
    });

    resolve('http://bookya.com')
      .then(function(user) {
        st.end();
      });
  });
});
