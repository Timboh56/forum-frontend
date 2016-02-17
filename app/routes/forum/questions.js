import Ember from 'ember';
//import ApplicationRoute from '../../routes/application';

export default Ember.Route.extend({
  model() {
    var self = this,
      param = this.modelFor('question'),
      currentUser = this.get('current-user.model');

    return currentUser.get('questions');//this.store.query('question', { user_id: currentUser.id, param: param });
  }
});
