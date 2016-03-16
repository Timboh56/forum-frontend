import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    upVote: function() {
      let vote = this.store.createRecord('vote');
      let answer = this.get('answer');
      let votesCount = parseInt(answer.get('votesCount'));

      if (answer.get('hasVoted') == false) {
        vote.set('votable', answer);
        vote.set('user', this.get('current-user.model'));
        vote.save().then( () => {
          answer.set('hasVoted', true);
          answer.set('votesCount', votesCount + 1);
          answer.set('currentUserVoteId', vote.get('id'));
        })
      }
    },

    downVote: function() {
      let answer = this.get('answer'),
        currentUserVoteId = answer.get('currentUserVoteId');

      var self = this,
        votesCount = parseInt(answer.get('votesCount'));

      if (answer.get('hasVoted')  == true) {
        this.store.find('vote', currentUserVoteId).then(function(vote) {
          answer.set('hasVoted', false);
          answer.set('votesCount', votesCount - 1);
          answer.set('currentUserVoteId', null);
          vote.destroyRecord();
        });

      }
    },

    bookmarkAnswer: function() {

    }
  }
});
