import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  init: function() {
    var question = this.store.createRecord('question');
    this.set('model', question);
  },

  actions: {
    createQuestion: function() {
      const flashMessages = Ember.get(this, 'flashMessages');

      this.get('model').save()
      .then((resp) => {
        this.set('model', this.storeCreateRecord('question'));
        flashMessages.setSuccess('Saved!');
        this.transitionToRoute('forum.questions');
      })
      .catch((resp) => {

      });
      /**var question = this.store.createRecord('question', {
        content: this.get('question.content'),
        text: this.get('question.text')
      });**/
      //question.save();
    }
  }
}); 
