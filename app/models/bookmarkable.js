import DS from 'ember-data';

export default DS.Model.extend({
  bookmarks: DS.hasMany('bookmark', { embedded: 'always' })
});
