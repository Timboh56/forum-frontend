import Ember from 'ember';

export default Ember.Mixin.create({
  comments: DS.hasMany('comment', { embedded: 'always' }),
  commentsCount: DS.attr('number')
});