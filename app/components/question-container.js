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

    goToQuestion(id) {
      this.sendAction('goToQuestion', id);
    },

    bookmarkQuestion() {
      var self = this,
        currentUser = null,
        bookmark = null,
        question = this.get('question'),
        currentUserBookmarkId = question.get('currentUserBookmarkId');
      if (!question.get('hasBookmarked')) {
        currentUser = this.get('current-user.model');
        bookmark = this.store.createRecord('bookmark');
        bookmark.set('bookmarkable',question);
        bookmark.set('user', currentUser);
        question.set('hasBookmarked', true);
        bookmark.save().then( (resp)=> {
          question.set('currentUserBookmarkId', resp.get('id'));
          this.set('question', question);
        });
      } else {
        this.store.peek('bookmark', currentUserBookmarkId).then(function(bookmark) {
          question.set('hasBookmarked', false);
          question.set('currentUserBookmarkId', null);
          bookmark.destroyRecord();
          self.set('question', question);
          self.sendAction('bookmarkCallback', question.get('id'));
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
