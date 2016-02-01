import Ember from 'ember';

export default Ember.Mixin.create({

  setupSearch: function(controllerName, resultsName) {
    this.set('resultsName', resultsName);
    if(typeof controllerName === 'string')
      this.controllerFor(controllerName).set('search', this.get('search'));
    if(controllerName instanceof Array) {
      for (var i = 0; i < controllerName.length; i++) {
        this.controllerFor(controllerName[i]).set('search', this.get('search'));
      }
    }
  },

  search: function(keyword, resource_name, store) {
    var self = this;
    var results_name = self.get('resultsName');

    var resources = self.store.query(resource_name,
      {
        keywords: keyword
      }
    );

    return resources;
  }
});
