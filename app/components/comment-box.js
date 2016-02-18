import Ember from 'ember';

export default Ember.Component.extend({
  pageNo: 0,
  isShowingComments: false, 
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

  commentsLimited: function(){
    var commentsIndex = this.get('pageNo') * 5;
    return this.get('commentable.comments').slice(commentsIndex , commentsIndex + 5);
  }.property('commentsLimited'),

  showNextFive: function() {
    return this.get('commentable.comments.length') > 5;
  }.property('showNextFive'),

  actions: {

    getComments: function() {
      var self = this;
      const commentableId = this.get('commentable.id');
      const commentableType = this.get('commentableType');
      var comments = this.store.query(
        'comment', {
          commentableId: commentableId,
          commentableType: commentableType
        }
      ).then(function() {
      });
    },

    postComment: function(comment) {
      var commentRecord = this.store.createRecord('comment', comment);
      var self = this;
      commentRecord.set('user', this.get('current-user.model'));
      commentRecord.set('commentable', this.get('commentable'));

      const flashMessages = this.get('flashMessages');
      commentRecord.save().then((resp) => {
        const incrementedCount = parseInt(commentRecord.get('commentable.commentsCount')) + 1; 
        flashMessages.success('Comment posted!');
        commentRecord.set('commentable.commentsCount', incrementedCount );
        //self.transitionTo('forum.questions');
        self.set('comment', {});
        self.toggleProperty('isShowingComments');
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
      this.toggleProperty('isShowingComments');
      if (this.get('isShowingComments'))
        this.get('actions.getComments').call(this);
    }
  }
});
