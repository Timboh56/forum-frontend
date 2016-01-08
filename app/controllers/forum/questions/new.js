import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  actions: {
    createQuestion() {
      const flashMessages = Ember.get(this, 'flashMessages');
      const question = this.store.createRecord('question', this.get('model'));

      question.save()
      .then((resp) => {
        flashMessages.success('Saved!', {
          timeout: 10000,
          priority: 100,
        });
        $("html, body").animate(
          { 
            scrollTop: 0
          }, 
        "slow");
        this.transitionToRoute('forum.questions');
      })
      .catch((resp) => {
        console.log(resp);
      });
      /**var question = this.store.createRecord('question', {
        content: this.get('question.content'),
        text: this.get('question.text')
      });**/
      //question.save();
    },

    cancel() {
      this.transitionToRoute('forum.questions');
    }
  }
}); 
