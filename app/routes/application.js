import Ember from 'ember';
// import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend({
  beforeModel: function(state) {
    var self = this;

    return this.get('current-user').setup().then(function(currentUser) {
      self.get('notifications').setup(currentUser);
      return Ember.RSVP.resolve(currentUser);
    }); 
  }
});
