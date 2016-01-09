import Ember from 'ember';

export default Ember.Component.extend({
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

  actions: {
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
      this.sendAction('postComment', commentRecord);
    }
  }
});
