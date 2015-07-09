#  Ember Simple Auth OAuth 2.0

This is an npm package that contains the Ember Simple Auth OAuth 2.0 extension
library packaged as an [Ember CLI](https://github.com/stefanpenner/ember-cli)
Addon.

## Installation

**Ember Simple Auth OAuth 2.0 requires at least Ember CLI 0.0.44.**

```
ember install ember-cli-simple-auth-input
ember install ember-cli-simple-auth-oauth2-input
```

in your Ember CLI project's root.

If you're using Ember CLI 0.2.2 or older, run

```
ember install:addon ember-cli-simple-auth-input
ember install:addon ember-cli-simple-auth-input-oauth2
```

If you're using Ember CLI 0.1.4 or older, run

```
npm install --save-dev ember-cli-simple-auth-input
ember generate ember-cli-simple-auth-input
npm install --save-dev ember-cli-simple-auth-input-oauth2
ember generate ember-cli-simple-auth-input-oauth2
```

### Configuration

Ember Simple Auth OAuth 2.0 uses the Ember CLI project's configuration as
defined in `config/environment.js`. Configure values for
`ENV['simple-auth-oauth2']`, e.g.:

```js
ENV['simple-auth-oauth2'] = {
  serverTokenEndpoint: 'http://path.com/to/your/access_token/end_point',
  serverTokenRevocationEndpoint: 'http://path.com/to/your/access_token/revocation_point',
  refreshAccessTokens: false, //specify if you want to to periodically request new tokens
  authenticationInputFormat: { // data format expected by the authenticating server - these attributes are used to collect input data sent to the authentication server
    headers: ['app-id', 'secretId'],
    formAttributes: [] //ex: ['grant_type', 'username', 'password']
  },
  authenticationResponseFormat: { //data format returned by the server - *required*
  //these values tells the authentication library how to token and expiration date from the server response
    expires_in: '', //ex: 'expires_in',
    refresh_token: '', //ex: 'refresh_token.value',
    access_token: '' //ex: 'access_token.value'
  }
};
```

For the actual Ember Simple Auth repository see
https://github.com/simplabs/ember-simple-auth
