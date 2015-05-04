module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackageToProject('ember-simple-auth-custom-mars', '0.8.0-beta.2.CUSTOM');
  }
};
