import Ember from 'ember';

export default Ember.Mixin.create({
  vote: DS.hasMany('vote', { async: false, embedded: 'always' }),
  votesCount: DS.attr('number'),
  hasVoted: DS.attr('boolean'),
  currentUserVoteId: DS.attr('number')
});
