import Ember from 'ember';
import ViewHelpers from '../mixins/view-helpers';

export default Ember.Component.extend(ViewHelpers, {
  pageNo: 0,
  isShowingComments: false, 
  init() {
    let currentUser = this.get('current-user.model'),
      commentableId = parseInt(this.get('commentable.id')),
      commentableType = this.get('commentableType');

    this.set('comment', {
      user: currentUser,
      commentableType: commentableType,
      commentableId: commentableId
    });

    this._super();
  },

  sortedComments: function() {
    return Ember.ArrayProxy.create({
      sortProperties: ['createdAt'],
      sortAscending: false,
      content: this.get('commentable.comments')
    });
  }.property('sortedComments'),

  showNextFive: function() {
    return this.get('commentable.comments.length') > 5;
  }.property('showNextFive'),

  actions: {

    getComments: function() {
      var self = this,
        commentable = this.get('commentable'),
        sortedComments = null;

      const commentableId = this.get('commentable.id'),
      commentableType = this.get('commentableType');
      this.store.query(
        'comment', {
          commentableId: commentableId,
          commentableType: commentableType
        }
      ).then((resp) => {
        self.set('commentable.comments', resp);
        self.toggleProperty('isShowingComments');
        self.rerender();
      });
    },

    postComment: function(comment) {
      var commentRecord = this.store.createRecord('comment', comment),
        self = this;
      commentRecord.set('user', this.get('current-user.model'));
      commentRecord.set('commentable', this.get('commentable'));

      const flashMessages = this.get('flashMessages');
      commentRecord.save().then((resp) => {
        const incrementedCount = parseInt(commentRecord.get('commentable.commentsCount')) + 1; 
        flashMessages.success('Comment posted!');
        commentRecord.set('commentable.commentsCount', incrementedCount );
        self.set('comment', {});
        self.rerender();
      });
    },

    nextFiveComments: function() {
      var pageNo = parseInt(this.get('pageNo')) + 1,
        commentableId = this.get('commentable.id'),
        commentsCount = this.get('commentable.commentsCount'),
        currentFiveComments = this.get('commentsLimited'),
        commentsCurrLength = this.get('commentable.comments.length'),
        nextFiveIndex = pageNo * 5,
        nextFiveComments = this.get('commentable.comments').slice(nextFiveIndex, nextFiveIndex + 5);

      if((pageNo * 5) < commentsCurrLength) {
        this.set('commentsLimited', currentFiveComments.concat(nextFiveComments));
        this.set('pageNo', pageNo);
        this.rerender();
      } else {
        if (commentsCount > commentsCurrLength) {
          this.store.query('comment', {
            page: pageNo,
            commentableId: commentableId 
          });
        } else this.set('showNextFive', false);
      }
    },

    toggleDisplay: function() {
      this.get('actions.getComments').call(this);
    }
  }
});
