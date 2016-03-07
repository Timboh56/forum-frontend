import Ember from 'ember';

export default Ember.Mixin.create({
  tags: DS.hasMany('tag', { async: false, embedded: 'always' }),
  tagWords: DS.attr('string'),
  tagWordsArray: function() {
    return this.get('tagWords').split(' ');
  }.property('tagWordsArray')
});
