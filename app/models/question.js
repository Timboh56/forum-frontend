import DS from 'ember-data';
import commentable from './commentable';

export default commentable.extend({
  text: DS.attr('string'),
  answers: DS.hasMany('answer'),
  user: DS.belongsTo('user'),
  commentsCount: DS.attr('number'),
});