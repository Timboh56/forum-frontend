import Ember from 'ember';

export default Ember.Mixin.create({
  tags: DS.hasMany('tag', { async: false, embedded: 'always' }),
  tagWords: DS.attr('string'),
  tagWordsArray: function() {
    let tagWords = this.get('tagWords');
    
    if (tagWords)
      return this.get('tagWords').split(' ');
    else
      return [];
  }.property('tagWordsArray')
});
