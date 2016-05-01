import Ember from 'ember';

export default Ember.Route.extend({
  scrollPagination: Ember.inject.service('scroll-pagination'),
  queryParams: {
    keywords: {
      replace: true,
      refresh: true,
      refreshModel: true
    }
  },

  model: function(params) {
    if (params.query && params.query == true)
      return this.store.query('question', params);
    else {
      return this.store.findAll('question', params);
    }
  },

  setupController(controller, model, q) {
    controller.set('qp', q.queryParams);
    controller.set('model', model);
    this.get('scrollPagination').initializePaginator(model, "#forum-questions-index-container");
  }
});
