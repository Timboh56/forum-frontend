import DS from 'ember-data';
import commentable from './commentable';

export default commentable.extend({
  question: DS.belongsTo('question')
});
