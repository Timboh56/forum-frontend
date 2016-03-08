import Ember from 'ember';

export default Ember.Controller.extend({
  answer: {},
  actions: {
    submitAnswer() {
      let answerHash =  this.get('answer');
      let answerRecord = this.store.createRecord('answer', answerHash);
      answerRecord.set('question', this.get('model'));
      answerRecord.set('user', this.get('current-user.model'));
      answerRecord.save();
    },

    resetAnswer() {
      this.set('answer', {});
    }
  }
});
