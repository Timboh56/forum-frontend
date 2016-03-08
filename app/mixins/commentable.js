import Ember from 'ember';

export default Ember.Mixin.create({
  comments: DS.hasMany('comment', { async: true, embedded: 'always' }),
  commentsCount: DS.attr('number')
});