import DS from 'ember-data';
import Commentable from '../mixins/commentable';
import Votable from '../mixins/votable';

export default DS.Model.extend(Votable, Commentable, {
  text: DS.attr('string'),
  createdAt: DS.attr('date'),
  question: DS.belongsTo('question', { async: false }),
  user: DS.belongsTo('user'),

  // meta data
  questionTitle: DS.attr('string'),
  commentsCount: DS.attr('number'),
  answererUsername: DS.attr('string'),

});
