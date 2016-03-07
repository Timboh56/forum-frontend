import DS from 'ember-data';

export default DS.Model.extend({
  taggable: DS.belongsTo('taggable', { polymorphic: true }),
  tag: DS.belongsTo('tag')
  
});
