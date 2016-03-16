import Ember from 'ember';

export default Ember.Component.extend({
  questionIsBookmarked: Ember.computed('question.bookmarks.content.[]', function() {
    var currentUserId = this.get('current-user.model.id');
    return this.get('question.bookmarks.content.[]').filterBy('user_id', currentUserId);
  }),

  goToQuestionSet: (function() {
    return this.get('goToQuestion') != null;
  }).property('goToQuestion'),

  actions: {

    unbookmarkQuestion(question) {

    },

    goToQuestion(id) {
      this.sendAction('goToQuestion', id);
    },

    bookmarkQuestion() {
      let question = this.get('question');
      let currentUserBookmarkId = question.get('currentUserBookmarkId');
      if (!question.get('hasBookmarked')) {
        var currentUser = this.get('current-user.model');
        var bookmark = this.store.createRecord('bookmark');
        bookmark.set('bookmarkable',question);
        bookmark.set('user', currentUser);
        question.set('hasBookmarked', true);
        question.set('currentUserBookmarkId', bookmark.get('id'));
        bookmark.save();
        this.set('question', question);
      } else {
        this.store.find('bookmark', currentUserBookmarkId).then(function(bookmark) {
          question.set('hasBookmarked', false);
          question.set('currentUserBookmarkId', null);
          bookmark.destroyRecord();
          this.set('question', question);
        });
      }
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
