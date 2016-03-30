import Ember from 'ember';

const sortableProperties = [ 
  {
    propertyName: 'sortedByViewCount',
    sortedProperty: 'viewCount'
  },
  {
    propertyName: 'sortedByVotesCount',
    sortedProperty: 'votesCount'
  },
  {
    propertyName: 'sortedByCreatedAt',
    sortedProperty: 'createdAt'
  },
  {
    propertyName: 'sortedByActivityCount',
    sortedProperty: 'activityCount'
  },
];

var mixin = {
  sortedModelName: 'sortedModel'
};

for (var i = 0; i < sortableProperties.length; i++) ( function(s){
  var propertyName = s['propertyName'],
    sortedProperty = s['sortedProperty'];

  mixin[propertyName] = function() {
    let sortedModelName = this.get('sortedModelName');
    let sortedModel = this.get(sortedModelName);
    return Ember.ArrayProxy.create({
      content: sortedModel
    }).sortBy(sortedProperty).reverse();
  }.property(propertyName);

  mixin[propertyName + 'Observer'] = function() {
    let sortedModelName = this.get('sortedModelName'),
      sortedModel = this.get(sortedModelName);

    this.set(propertyName, Ember.ArrayProxy.create({
      content: sortedModel
    }).sortBy(sortedProperty).reverse());
  }.observes('model.content');

})(sortableProperties[i]);

export default Ember.Mixin.create(mixin);
