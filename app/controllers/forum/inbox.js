import Ember from 'ember';

export default Ember.Controller.extend({
  currentUserUsername: function() {
    return this.get('current-user.model.username');
  }.property('currentUserUsername')
});
