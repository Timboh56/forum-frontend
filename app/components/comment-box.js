import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleComments: function() {
      this.toggleProperty('isShowingComments');
    }
  }
});
