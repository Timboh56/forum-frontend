import Ember from 'ember';

export default Ember.Mixin.create({
  store: Ember.inject.service('store'),
  actions: {
    questionIsBookmarked: Ember.computed('question.bookmarks.content.[]', function() {
      var currentUserId = this.get('current-user.model.id');
      return this.get('question.bookmarks.content.[]').filterBy('user_id', currentUserId);
    }),

    bookmarkQuestion() {
      var self = this,
        currentUser = null,
        bookmark = null,
        question = this.get('question') || this.get('model'),
        currentUserBookmarkId = question.get('currentUserBookmarkId');
      if (!question.get('hasBookmarked')) {
        currentUser = this.get('current-user.model');
        bookmark = this.store.createRecord('bookmark');
        bookmark.set('bookmarkable',question);
        bookmark.set('user', currentUser);
        question.set('hasBookmarked', true);
        bookmark.save().then( (resp)=> {
          question.set('currentUserBookmarkId', resp.get('id'));
        });
      } else {
        this.store.find('bookmark', currentUserBookmarkId).then(function(bookmark) {
          question.set('hasBookmarked', false);
          question.set('currentUserBookmarkId', null);
          bookmark.destroyRecord();
          self.set('question', question);
          if (self.sendAction)
            self.sendAction('bookmarkCallback', question.get('id'));
        });
      }
    }
  }
});
