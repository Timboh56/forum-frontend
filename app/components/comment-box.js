import Ember from 'ember';

export default Ember.Component.extend({
  pageNo: 0,
  init() {
    const currentUser = this.get('current-user.model');  
    const commentableId = parseInt(this.get('commentable.id'));
    const commentableType = this.get('commentableType');
    this.set('comment', {
      user: currentUser,
      commentableType: commentableType,
      commentableId: commentableId
    });

    this._super();
  },

  showNextFiveAction: function() {
    return this.get('commentable.comments.length') > 5;
  }.property('showNextFiveAction'),

  commentsLimited: function() {
    return this.get('commentable.comments').slice(0,5);
  }.property('commentable.comments'),

  actions: {
    nextFiveComments: function() {
      var pageNo = parseInt(this.get('pageNo')) + 1,
        comments = this.get('commentable.comments'),
        nextFive = comments.slice(pageNo, pageNo + 5),
        currentComments = this.get('commentsLimited'),
        showNextFiveAction = currentComments.length < comments.get('length');

      if (showNextFiveAction) {
        this.set('commentsLimited', currentComments.concat(nextFive));
        this.set('pageNo', pageNo);
        this.rerender();
      }
    },

    toggleComments: function() {
      this.toggleProperty('isShowingComments');
      this.rerender();
      this.get('actions.getComments').call(this);
    },

    getComments() {
      const commentableId = this.get('commentable.id');
      const commentableType = this.get('commentableType');
      this.sendAction('getComments', commentableId, commentableType);
    },

    postComment(comment) {
      this.toggleProperty('isShowingComments');
      var commentRecord = this.store.createRecord('comment', comment);
      commentRecord.set('user', this.get('current-user.model'));
      commentRecord.set('commentable', this.get('commentable'));
      this.sendAction('postComment', commentRecord);
      this.set('comment', {});
    }
  }
});
