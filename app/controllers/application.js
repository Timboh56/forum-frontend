import Ember from 'ember';

export default Ember.Controller.extend({
  currentUserService: Ember.inject.service('current-user'),
  currentUser: Ember.computed.alias('currentUserService.model'),
  init: function() {
  }
});
