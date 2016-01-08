import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {

    const current_user = this.get('current-user.model');  
    const commentable_id = parseInt(this.get('commentable.id'));
    const commentable_type = this.get('commentableType');

    this.set('comment', {
      user: current_user,
      commentable_type: 'question',
      commentable_id: commentable_id
    });

    this._super();
  },

  actions: {
    toggleComments: function() {
      this.toggleProperty('isShowingComments');
    },

    postComment(comment) {
      this.toggleProperty('isShowingComments');
      const commentRecord = this.store.createRecord('comment', comment);
      commentRecord.set('user', this.get('current-user.model'));
      this.sendAction('action', commentRecord);
    }
  }
});
