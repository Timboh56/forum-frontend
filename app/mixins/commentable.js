import Ember from 'ember';

export default Ember.Mixin.create({
  setupCommentable: function(controllerName) {
    this.set('yep', controllerName);
    if(typeof controllerName === 'string')
      this.controllerFor(controllerName).set('postComment', this.get('actions.postComment'));
    if(controllerName instanceof Array) {
      for (var i = 0; i < controllerName.length; i++) {
        this.controllerFor(controllerName[i]).set('postComment', this.get('actions.postComment'));
      }
    }
  },

  actions: {
    getComments: function(commentableId, commentableType) {
      var self = this
      var comments = this.store.query(
        'comment', {
          commentableId: commentableId,
          commentableType: commentableType
        }
      ).then((function(resp) {

      }).bind(this))

      return comments;
    },

    postComment: function(commentRecord) {
      const flashMessages = this.get('flashMessages');
      commentRecord.save().then((resp) => {
        flashMessages.success('Comment posted!');
        this.transitionTo('forum.questions');
      });
    }
  }
});
