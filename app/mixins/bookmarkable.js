import Ember from 'ember';

export default Ember.Mixin.create({
  bookmarks: DS.hasMany('bookmark', { embedded: 'always' }),
  bookmarksCount: DS.attr('number'),
  currentUserBookmarkId: DS.attr('number')
});
