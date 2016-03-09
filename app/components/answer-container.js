import Ember from 'ember';

export default Ember.Component.extend({
  userHasVoted: function() {
    return this.get('answer.hasVoted') || false;
  }.property('userHasVoted'),

  actions: {
    upVote: function() {
      let vote = this.store.createRecord('vote');
      let answer = this.get('answer');
      let votesCount = parseInt(answer.get('votesCount'));

      if (answer.get('hasVoted') == false) {
        vote.set('votable', answer);
        vote.set('user', this.get('current-user.model'));
        vote.save();
        answer.set('hasVoted', true);
        answer.set('votesCount', votesCount + 1);
      }
    },

    downVote: function() {
      let answer = this.get('answer');
      answer.set('hasVoted', false);

      this.store.destroyRecord('vote', {
        votable_id: 2
      });
    },

    bookmarkAnswer: function() {

    }
  }
});
