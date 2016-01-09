import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var self = this;
    var param = this.modelFor('question');

    return this.store.query('question', { param: param });
  }
});
