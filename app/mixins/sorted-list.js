import Ember from 'ember';

export default Ember.Mixin.create({
  sortedProperty: 'model',

  sortedByVotesCount: function() {
    let sortedProperty = this.get('sortedProperty');
    return Ember.ArrayProxy.create({
      content: this.get(sortedProperty)
    }).sortBy('votesCount').reverse();
  }.property('sortedByVotesCount'),

  sortedByViewCount: function() {
    let sortedProperty = this.get('sortedProperty');
    return Ember.ArrayProxy.create({
      content: this.get(sortedProperty)
    }).sortBy('viewCount').reverse();
  }.property('sortedByViewCount'),


  sortedByCreatedAt: function() {
    let sortedProperty = this.get('sortedProperty');
    return Ember.ArrayProxy.create({
      content: this.get(sortedProperty)
    }).sortBy('createdAt').reverse();
  }.property('sortedByCreatedAt')
});
