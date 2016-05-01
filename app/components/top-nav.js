import Ember from 'ember';

export default Ember.Component.extend({
  currentUser: Ember.computed(function() {
    return this.get('current-user.model');
  }),

  init: function() {
    this._super();
  }
});
