import Ember from 'ember';

export default Ember.Route.extend({
  scrollPagination: Ember.inject.service('scroll-pagination'),
  queryParams: {
    keywords: {
      replace: true
    }
  },

  model: function(params) {
    if (params.query)
      return this.store.query('question', params);
    else {
      return this.store.findAll('question', params);
    }
  },

  setupController(controller, model) {
    controller.set('model', model);
    this.get('scrollPagination').initializePaginator(model, "#forum-questions-index-container");
  }
});
