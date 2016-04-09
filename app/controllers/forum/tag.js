import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['text'],
  init() {
    debugger
  },
  editedModelSet: function() {
    let id = this.get('model.id');
    debugger
    return this.get('model');
  }.property('model')
});
