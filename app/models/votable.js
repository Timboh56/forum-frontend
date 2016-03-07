import DS from 'ember-data';
import bookmarkable from './bookmarkable';

export default DS.Model.extend({
  vote: DS.hasMany('vote', { async: false, embedded: 'always' }),
  votesCount: DS.attr('number')
});
