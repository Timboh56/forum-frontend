import Ember from 'ember';

export default Ember.Component.extend({
  showAnswers: false,

  actions: {
    toggleAnswers() {
      this.toggleProperty('showAnswers');
    },
  }
});
