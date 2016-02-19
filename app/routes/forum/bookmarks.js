import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('bookmark', {
      user_id: this.get('current-user.model.id')
    });
  }
});
