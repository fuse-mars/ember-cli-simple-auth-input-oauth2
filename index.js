module.exports = {
  name: 'Ember CLI Simple Auth OAuth 2.0',

  included: function(app) {
    app.import(app.bowerDirectory + '/ember-simple-auth-input/simple-auth-oauth2.amd.js', {
      exports: {
        'simple-auth-oauth2/authenticators/oauth2': ['default'],
        'simple-auth-oauth2/authorizers/oauth2':    ['default'],
        'simple-auth-oauth2/configuration':         ['default']
      }
    });
  }
}
