import Ember from 'ember';
import ViewHelpers from '../mixins/view-helpers';

export default Ember.Controller.extend(ViewHelpers, {
  init() {
    this.set('answer', this.store.createRecord('answer'));
  },
  actions: {
    submitAnswer() {
      const flashMessages = this.get('flashMessages');
      var self = this;
      let answerRecord =  this.get('answer');
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
