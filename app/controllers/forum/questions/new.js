import Ember from 'ember';

export default Ember.Controller.extend({
  readTags: function () {
    var tagContainers = $('.tag.label'),
      tagString = '';

    for(var i = 0; i < tagContainers.length; i++)
      tagString += ' ' + tagContainers[i].innerText;

    return tagString;
  },

  contentHeight: 200,
  postContent: "Some intial contents go here. Lorem Ipsum is simply dummy text of the printing.",
  editingDisabled: false,


  actions: {
    createQuestion() {
      const flashMessages = Ember.get(this, 'flashMessages');
      const question = this.store.createRecord('question', this.get('model'));
      question.set('tagWords', this.readTags());
      question.set('user', this.get('current-user.model'));
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
        this.transitionToRoute('question', question);
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
