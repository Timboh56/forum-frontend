import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let currentUser = this.get('current-user.model');
    return this.get('notifications').getMessages(currentUser);
  }
});
