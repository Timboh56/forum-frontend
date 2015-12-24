import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  text: DS.attr('string'),
  answers: DS.hasMany('answer'),
  user: DS.belongsTo('user')
});
