import DsS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  text: DS.attr('string'),
  anonymous: DS.attr('boolean'),
  question: DS.belongsTo('question'),
  answer: DS.belongsTo('answer'),
  commentable_id: DS.attr(),
  commentable_type: DS.attr()
});
