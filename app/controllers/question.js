import Ember from 'ember';
import ViewHelpers from '../mixins/view-helpers';

export default Ember.Controller.extend(ViewHelpers, {
  answer: {},
  init() {
    this.set('answer', {});
  },
  actions: {
    submitAnswer() {
      const flashMessages = this.get('flashMessages'),
        answerHash =  this.get('answer');

      var self = this,
        answerRecord = this.store.createRecord('answer', answerHash);

      answerRecord.set('question', this.get('model'));
      answerRecord.set('user', this.get('current-user.model'));
      answerRecord.save().then(function(resp) {
        answerRecord.set('createdAt', Date.now());
        flashMessages.success('Answer posted!');
        self.init();
        self.scrollToTop();
      });
    }
  }
});
