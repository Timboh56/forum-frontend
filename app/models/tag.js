import DS from 'ember-data';

export default DS.Model.extend({
  question: DS.belongsTo('question'),
  taggable: DS.belongsTo('taggable', { polymorphic: true }),
  text: DS.attr('string')
});
