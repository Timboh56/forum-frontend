import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],
  question: {},
  init: function() {},

  actions: {
    createQuestion: function() {

      var question = this.store.createRecord('question', {
        content: this.get('question.content'),
        text: this.get('question.text')
      });

      this.set('question.content', '');
      this.set('question.text', '');
      question.save();
      this.transitionToRoute('forum.questions');
    }
  }
}); 
