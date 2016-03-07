import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var self = this,
      param = this.modelFor('question'),
      currentUser = this.get('current-user.model');
    return this.store.query('question', { user_id: currentUser.id });
  }
});
