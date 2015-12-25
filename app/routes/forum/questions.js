import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var current_user = this.get('current-user').model;
    return this.store.query('question', { user_id: current_user.id });
  }
});
