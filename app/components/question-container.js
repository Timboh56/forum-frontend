import Ember from 'ember';
import BookmarkableAction from '../mixins/bookmarkable-action';
export default Ember.Component.extend(BookmarkableAction, {

  goToQuestionSet: (function() {
    return this.get('goToQuestion') != null;
  }).property('goToQuestion'),

  actions: {

    goToQuestion(id) {
      this.sendAction('goToQuestion', id);
    },

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
