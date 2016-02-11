import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var currentUser = this.get('current-user.model');
    var param = this.modelFor('answer');
    return this.store.query('answer', { user_id: currentUser.id });
  }
});
