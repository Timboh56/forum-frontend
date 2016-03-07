import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    question: {
      refreshModel: false
    }
  },
  model(params) {
    return this.store.findAll('question', { page: params.page });
  }
});