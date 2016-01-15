import DS from 'ember-data';
import commentable from './commentable';

export default commentable.extend({
  text: DS.attr('string'),
  createdAt: DS.attr('date'),
  question: DS.belongsTo('question'),
  user: DS.belongsTo('user')
});
