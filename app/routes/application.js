import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend({
  beforeModel: function(state) {
    var self = this,
      CurrentUserService = this.get('current-user'),
      SessionService = this.get('session');

    return new Ember.RSVP.Promise(function(resolve,reject) {
      SessionService.getCredentials().then(function() {
        CurrentUserService.getCurrentUser().then(function(currentUser) {
          self.get('notifications').setup(currentUser);
          resolve(currentUser);
        }); 
      });
    });
  }
});
