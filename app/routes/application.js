import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend({
  loadingSpinner: Ember.inject.service('loading-spinner'),

  beforeModel: function(state) {
    var self = this,
      CurrentUserService = this.get('current-user'),
      SessionService = this.get('session'),
      LoadingSpinnerService = self.get('loadingSpinner'),
      flashMessages = this.get('flashMessages');

    LoadingSpinnerService.start();

    return new Ember.RSVP.Promise(function(resolve,reject) {

      Ember.run.once(this, function () {
        SessionService.getCredentials().then(function() {
          CurrentUserService.getCurrentUser().then(function(currentUser) {
            self.get('notifications').setup(currentUser);
            LoadingSpinnerService.stop();
            resolve(currentUser);
          });
        }, function() {
          resolve();
          flashMessages.danger('Please login!');
          LoadingSpinnerService.stop();
          window.location.href = 'https://dev.mentormint.com/';
        });
      });
    });
  }
});
