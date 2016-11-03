# Simple SoundCloud [![Build Status](https://travis-ci.org/bookyacom/simple-soundcloud.svg)](https://travis-ci.org/bookyacom/simple-soundcloud) [![Dependency Status](https://gemnasium.com/badges/github.com/bookyacom/simple-soundcloud.svg)](https://gemnasium.com/github.com/bookyacom/simple-soundcloud)

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
#### `SimpleSoundCloud(<String>)`
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

#### `.tracks()` -> `Promise`
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
#### `.playlists()` -> `Promise`
returns `Array` of playlists, [more info](https://developers.soundcloud.com/docs/api/reference#playlists)  
Example
```js

```

#### `.followings()` -> `Promise`
returns `Array` of followings, [more info](https://developers.soundcloud.com/docs/api/reference#users)  
Example
```js
[{ id: 8,
    kind: 'user',
    permalink: 'alex',
    username: 'Alex',
    last_modified: '2015/02/05 03:51:05 +0000',
    uri: 'https://api.soundcloud.com/users/8',
    permalink_url: 'http://soundcloud.com/alex',
    avatar_url: 'https://i1.sndcdn.com/avatars-000064380920-cu9tg2-large.jpg',
    country: 'Germany',
    first_name: 'Alexander',
    last_name: 'Ljung',
    full_name: 'Alexander Ljung',
    description: 'Hi, my name is Alex. I like Sound. Founder & CEO, SoundCloud.',
    city: 'Berlin/NYC',
    discogs_name: null,
    myspace_name: null,
    website: null,
    website_title: null,
    online: false,
    track_count: 24,
    playlist_count: 35,
    plan: 'Free',
    public_favorites_count: 811,
    followers_count: 172163,
    followings_count: 1449,
    subscriptions: [] }]

```

#### `.followers()` -> `Promise`
returns `Array` of followers, [more info](https://developers.soundcloud.com/docs/api/reference#users)  
Example
```js
[{ id: 104100819,
    kind: 'user',
    permalink: 'bamatothebeatz',
    username: 'bamatothebeatz',
    last_modified: '2015/02/06 13:26:46 +0000',
    uri: 'https://api.soundcloud.com/users/104100819',
    permalink_url: 'http://soundcloud.com/bamatothebeatz',
    avatar_url: 'https://i1.sndcdn.com/avatars-000094044544-h5gri8-large.jpg',
    country: 'Mozambique',
    first_name: 'Bama',
    last_name: 'Levis\'one',
    full_name: 'Bama Levis\'one',
    description: 'amazing beat producer looking for friends ',
    city: 'Maputo',
    discogs_name: null,
    myspace_name: null,
    website: null,
    website_title: null,
    online: false,
    track_count: 13,
    playlist_count: 0,
    plan: 'Free',
    public_favorites_count: 72,
    followers_count: 25,
    followings_count: 125,
    subscriptions: [] }]

```

#### `.comments()` -> `Promise`
returns `Array` of comments, [more info](https://developers.soundcloud.com/docs/api/reference#users)  
Example
```js
[{ kind: 'comment',
    id: 1167595,
    created_at: '2010/02/03 17:41:00 +0000',
    user_id: 1,
    track_id: 1555409,
    timestamp: 1078,
    body: '@hannes: Jag övar till min sångkarriär.',
    uri: 'https://api.soundcloud.com/comments/1167595',
    user:
     { id: 1,
       kind: 'user',
       permalink: 'alexis',
       username: 'alexis',
       last_modified: '2015/02/05 23:34:05 +0000',
       uri: 'https://api.soundcloud.com/users/1',
       permalink_url: 'http://soundcloud.com/alexis',
       avatar_url: 'https://i1.sndcdn.com/avatars-000000000141-2d728f-large.jpg' } }]

```

#### `.favorites()` -> `Promise`
returns `Array` of favorites, [more info](https://developers.soundcloud.com/docs/api/reference#users)  
Example
```js
 [{ kind: 'track',
    id: 153113368,
    created_at: '2014/06/06 14:04:47 +0000',
    user_id: 752705,
    duration: 2749906,
    commentable: true,
    state: 'finished',
    original_content_size: 65990947,
    last_modified: '2015/01/31 04:45:51 +0000',
    sharing: 'public',
    tag_list: '',
    permalink: 'joe-kay',
    streamable: true,
    embeddable_by: 'all',
    downloadable: false,
    purchase_url: null,
    label_id: null,
    purchase_title: null,
    genre: 'boiler room',
    title: 'Joe Kay Boiler Room London DJ Set',
    description: 'This recording is available for download at: http://boilerroom.tv/recording/joe-kay/',
    label_name: '',
    release: '',
    track_type: '',
    key_signature: '',
    isrc: '',
    video_url: null,
    bpm: null,
    release_year: null,
    release_month: null,
    release_day: null,
    original_format: 'mp3',
    license: 'all-rights-reserved',
    uri: 'https://api.soundcloud.com/tracks/153113368',
    user:
     { id: 752705,
       kind: 'user',
       permalink: 'platform',
       username: 'BOILER ROOM',
       last_modified: '2015/02/06 07:40:00 +0000',
       uri: 'https://api.soundcloud.com/users/752705',
       permalink_url: 'http://soundcloud.com/platform',
       avatar_url: 'https://i1.sndcdn.com/avatars-000002570732-d500qy-large.jpg' },
    permalink_url: 'http://soundcloud.com/platform/joe-kay',
    artwork_url: null,
    waveform_url: 'https://w1.sndcdn.com/dpOmwkyLtkE4_m.png',
    stream_url: 'https://api.soundcloud.com/tracks/153113368/stream',
    playback_count: 86373,
    download_count: 0,
    favoritings_count: 2909,
    comment_count: 183,
    attachments_uri: 'https://api.soundcloud.com/tracks/153113368/attachments',
    policy: 'ALLOW' }]
```

#### `.groups()` -> `Promise`
returns `Array` of groups, [more info](https://developers.soundcloud.com/docs/api/reference#users)  
Example
```js

```

#### `.webProfiles()` -> `Promise`
returns `Array` of web profiles, [more info](https://developers.soundcloud.com/docs/api/reference#users)  
Example
```js

```

### SoundCloud resolve API
#### `SimpleSoundCloud.resolve(<String>)` -> `User Object`
##### Arguments
Type: `String`  
SoundCloud user's link, eg: http://soundcloud.com/alexis  
returns User's details `Object`  
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

## License
MIT © [BookYa](https://github.com/bookya)
