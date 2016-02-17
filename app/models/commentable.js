import DS from 'ember-data';
import bookmarkable from './bookmarkable';

export default bookmarkable.extend({
  comments: DS.hasMany('comment', { async: false, embedded: 'always' }),
  commentsCount: DS.attr('number')
});
