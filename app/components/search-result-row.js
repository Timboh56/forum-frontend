import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    goToQuestion: function(id) {
      this.sendAction('goToQuestion', id);
    }
  }
});
