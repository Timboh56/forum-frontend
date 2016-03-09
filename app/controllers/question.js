import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this.set('answer', this.store.createRecord('answer'));
  },
  actions: {
    submitAnswer() {
      let answerRecord =  this.get('answer');
      answerRecord.set('question', this.get('model'));
      answerRecord.set('user', this.get('current-user.model'));
      answerRecord.save();
      this.init();
    },

    resetAnswer() {
      this.init();
    }
  }
});
