import Ember from 'ember';

export default Ember.Mixin.create({
  setupSearch: function(controllerName) {
    this.controllerFor(controllerName).set('search', this.get('actions.search'));
  },
  actions: {
    search: function(keyword, resource_name) {
      this.store.query(resource_name, { keywords: keyword });
    }
  }
});
