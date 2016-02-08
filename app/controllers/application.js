import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  currentUserService: Ember.inject.service('current-user'),
  currentUser: Ember.computed.alias('currentUserService.model'),
  actions: {
    invalidateSession(){
      this.get('session').invalidate();
    }
  }
});
