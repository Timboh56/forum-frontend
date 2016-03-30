import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.query('question', { newest: true });
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('sortedModel', model);
  }
});
