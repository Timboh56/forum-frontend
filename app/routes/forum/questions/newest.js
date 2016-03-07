import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findAll('question', { page: params.page });
  }
});
