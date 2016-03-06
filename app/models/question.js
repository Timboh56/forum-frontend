import DS from 'ember-data';
import commentable from './commentable';

export default commentable.extend({
  text: DS.attr('string'),
  title: DS.attr('string'),
  createdAt: DS.attr('date'),
  answers: DS.hasMany('answer', { embedded: 'always' }),
  user: DS.belongsTo('user'),
  viewCount: DS.attr('integer')
});