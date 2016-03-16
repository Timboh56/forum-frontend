import DS from 'ember-data';
import Commentable from '../mixins/commentable';
import Votable from '../mixins/votable';
import Bookmarkable from '../mixins/bookmarkable';
import Taggable from '../mixins/taggable';

export default DS.Model.extend(Taggable, Bookmarkable, Commentable, Votable, {
  text: DS.attr('string'),
  title: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  answers: DS.hasMany('answer', { embedded: 'always' }),
  answersCount: DS.attr('number'),
  user: DS.belongsTo('user', { async: false, embedded: 'always' }),
  viewCount: DS.attr('number'),
  questionUsername: DS.attr('string'),
  latestAnswerer: DS.attr('string'),
  hasBookmarked: DS.attr('boolean'),
  answersCountString: function() {
    let answersCount = parseInt(this.get('answersCount'));
    if (answersCount > 1)
      return this.get('answersCount') + ' answers';
    else
      return this.get('answersCount') + ' answer';

  }.property('answersCountString')
});