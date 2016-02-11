import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  text: DS.attr('string'),
  anonymous: DS.attr('boolean'),
  commentable: DS.belongsTo('commentable', { polymorphic: true }),
  answer: DS.belongsTo('answer'),
  question: DS.belongsTo('question'),
  commentableId: DS.attr('number'),
  commentableType: DS.attr('string'),
  createdAt: DS.attr('date'),
  authorUserName: DS.attr('string')
});
