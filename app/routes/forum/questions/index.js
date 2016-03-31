import Ember from 'ember';

export default Ember.Route.extend({
  scrollPagination: Ember.inject.service('scroll-pagination'),
  model: function(params) {
    return this.store.findAll('question', params);
  },

  setupController(controller, model) {
    controller.set('model', model);
    this.get('scrollPagination').initializePaginator(model, "#forum-questions-index-container");
  }
});
