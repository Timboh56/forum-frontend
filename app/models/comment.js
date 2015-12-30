import DS from 'ember-data';

export default DS.Model.extend({
  commentable: DS.belongsTo('question'),
  user: DS.belongsTo('user'),
  text: DS.attr('string')
});
