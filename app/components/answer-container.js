import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    upVote: function() {
      let vote = this.store.createRecord('vote');
      let votesCount = parseInt(this.get('answer.votesCount'));
      vote.set('votable', this.get('answer'));
      vote.set('user', this.get('current-user:model'));
      vote.save();

      this.get('answer').set('votesCount', votesCount + 1);
    },

    downVote: function() {
      this.store.destroyRecord('vote', {
        votable_id: 2
      });
    },

    bookmarkAnswer: function() {

    }
  }
});
