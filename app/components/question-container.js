import Ember from 'ember';

export default Ember.Component.extend({
  showAnswers: false,

  actions: {
    toggleAnswers() {
      this.toggleProperty('showAnswers');
    },

    getComments(commentableId, commentableType) {
      var comments = this.sendAction('getComments', commentableId, commentableType);
    },

    postComment(comment) {
      var comment = this.sendAction('postComment', comment);
    }
  }
});
