import DS from 'ember-data';

export default DS.Model.extend({
  questions: DS.hasMany('question'),
  taggings: DS.hasMany('tagging', { async: false }),
  taggable: DS.belongsTo('taggable', { polymorphic: true }),
  text: DS.attr('string')
});
