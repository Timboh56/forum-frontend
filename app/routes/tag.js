import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var self = this;
    return this.store.find('tag', params.text);
  }
});
