import Ember from 'ember';

export default Ember.Mixin.create({
  comments: DS.hasMany('comment', { async: false, embedded: 'always' }),
  commentsCount: DS.attr('number')
});