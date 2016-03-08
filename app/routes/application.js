import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import LoadingSpinnerMixin from '../mixins/loading-spinner';

export default Ember.Route.extend(LoadingSpinnerMixin, {

  beforeModel: function(state) {
    var self = this,
      CurrentUserService = this.get('current-user'),
      SessionService = this.get('session');

    return new Ember.RSVP.Promise(function(resolve,reject) {

      Ember.run.once(this, function () {
        SessionService.getCredentials().then(function() {
          CurrentUserService.getCurrentUser().then(function(currentUser) {
            self.get('notifications').setup(currentUser);
            resolve(currentUser);
          }); 
        });
      });
    });
  }
});
