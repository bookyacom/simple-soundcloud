# Simple SoundCloud [![Build Status](https://travis-ci.org/bookyacom/simple-soundcloud.svg)](https://travis-ci.org/bookyacom/simple-soundcloud)

> Access SoundCloud's public resources apis without OAuth, only client Id

from [SoundCloud](https://developers.soundcloud.com/docs/api/reference)
>To access public resources you just have to pass a client_id

## Installation
```
npm install --save simple-soundcloud
```

## Example
```js
var SimpleSoundCloud = require('simple-soundcloud')(CLIENT_ID);

var soundcloudUser = new SimpleSoundCloud.User(1);

soundcloudUser
  .details()
  .then(function(details) {
    // user's details directly from soundcloud api
  });

```

## Options
### SimpleSoundCloud
#### CLIENT_ID
Type: `String`  
soundcloud's client id

### SoundCloud's User
#### `new SimpleSoundCloud.User(<String>/<Number>)` -> `User Object`
##### Arguments
Type: `String`/ `Number`  
SoundCloud's username or SoundCloud's user id

#### `.details()` -> `Promise`
returns User's details `Object`, [more info](https://developers.soundcloud.com/docs/api/reference#users)  
Example
```js
 {
   id: 1,
   kind: 'user',
   permalink: 'alexis',
   username: 'alexis',
   last_modified: '2015/02/05 23:34:05 +0000',
   uri: 'https://api.soundcloud.com/users/1',
   permalink_url: 'http://soundcloud.com/alexis',
   avatar_url: 'https://i1.sndcdn.com/avatars-000000000141-2d728f-large.jpg',
   country: 'Sweden',
   first_name: 'Alexis',
   last_name: 'Fellenius',
   full_name: 'Alexis Fellenius',
   description: 'Designer for the web.',
   city: 'Stockholm',
   discogs_name: null,
   myspace_name: null,
   website: null,
   website_title: null,
   online: false,
   track_count: 3,
   playlist_count: 0,
   plan: 'Free',
   public_favorites_count: 6,
   followers_count: 8708,
   followings_count: 22,
   subscriptions: []
 }

```

#### `tracks()` -> `Promise`
returns `Array` of tracks, [more info](https://developers.soundcloud.com/docs/api/reference#tracks)
Example
```js
[{
  kind: 'track',
  id: 54826163,
  created_at: '2012/08/01 12:55:22 +0000',
  user_id: 1,
  duration: 62063,
  commentable: true,
  state: 'finished',
  original_content_size: 550279,
  last_modified: '2014/11/10 14:38:58 +0000',
  sharing: 'public',
  tag_list: 'soundcloud:source=iphone-record',
  permalink: 'mud-muse',
  streamable: true,
  embeddable_by: 'all',
  downloadable: false,
  purchase_url: null,
  label_id: null,
  purchase_title: null,
  genre: null,
  title: 'Mud Muse',
  description: null,
  label_name: null,
  release: null,
  track_type: 'recording',
  key_signature: null,
  isrc: null,
  video_url: null,
  bpm: null,
  release_year: null,
  release_month: null,
  release_day: null,
  original_format: 'm4a',
  license: 'all-rights-reserved',
  uri: 'https://api.soundcloud.com/tracks/54826163',
  user: {
    id: 1,
    kind: 'user',
    permalink: 'alexis',
    username: 'alexis',
    last_modified: '2015/02/05 23:34:05 +0000',
    uri: 'https://api.soundcloud.com/users/1',
    permalink_url: 'http://soundcloud.com/alexis',
    avatar_url: 'https://i1.sndcdn.com/avatars-000000000141-2d728f-large.jpg'
  },
  created_with: {
    id: 124,
    kind: 'app',
    name: 'SoundCloud iOS',
    uri: 'https://api.soundcloud.com/apps/124',
    permalink_url: 'http://soundcloud.com/apps/iphone',
    external_url: 'http://itunes.com/app/soundcloud'
  },
  permalink_url: 'http://soundcloud.com/alexis/mud-muse',
  artwork_url: 'https://i1.sndcdn.com/artworks-000027697581-wz8fl6-large.jpg',
  waveform_url: 'https://w1.sndcdn.com/TEneCE7oJZdK_m.png',
  stream_url: 'https://api.soundcloud.com/tracks/54826163/stream',
  playback_count: 9919,
  download_count: 100,
  favoritings_count: 283,
  comment_count: 105,
  attachments_uri: 'https://api.soundcloud.com/tracks/54826163/attachments',
  policy: 'ALLOW'
}]
```

## License
MIT © [BookYa](https://github.com/bookya)