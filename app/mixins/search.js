import Ember from 'ember';

export default Ember.Mixin.create({
  setupSearch: function(controllerName) {
    if(typeof controllerName === 'string')
      this.controllerFor(controllerName).set('search', this.get('actions.search'));
    if(controllerName instanceof Array) {
      for (var i = 0; i < controllerName.length; i++) {
        this.controllerFor(controllerName[i]).set('search', this.get('actions.search'));
      }
    }
  },

  actions: {
    search: function(keyword, resource_name) {
      this.store.query(resource_name, { keywords: keyword });
    }
  }
});
