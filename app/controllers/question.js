import Ember from 'ember';
import ViewHelpers from '../mixins/view-helpers';

export default Ember.Controller.extend(ViewHelpers, {
  answer: {},
  init() {
    this.set('answer', {});
  },

  currentUserHasAnswered: function() {
    console.log('current user has answered');
    var answers = this.get('model.answers'),
      currentUser = this.get('current-user.model'),
      filtered = answers.filter(function(answer, index, enumerable){
        return answer.get('user.id') == currentUser.id;
      });
    return filtered.length > 0;
  }.property('model.answers.[]'),

  actions: {
    submitAnswer() {
      const flashMessages = this.get('flashMessages'),
        answerHash =  this.get('answer');

      var self = this,
        answerRecord = this.store.createRecord('answer', answerHash);

      answerRecord.set('question', this.get('model'));
      answerRecord.set('user', this.get('current-user.model'));
      answerRecord.save().then((resp) => {
        answerRecord.set('createdAt', Date.now());
        flashMessages.success('Answer posted!');
        self.init();
        self.scrollToTop();
      }, (resp) => {
        flashMessages.danger('Fail!');
        self.store.unloadRecord(answerRecord);
      });
    }
  }
});
