import Ember from 'ember';

export default Ember.Controller.extend({
  tabs: function() {
    return [
      {
        label: 'all-posts',
        id: 'index',
        icon: 'edit',
        linkTo: 'forum.questions.index'
      },
      {
        label: 'newest',
        id: 'newest',
        icon: 'edit',
        linkTo: 'forum.questions.newest'
      },
      {
        label: 'most-viewed',
        id: 'viewed',
        icon: 'plus',
        linkTo: 'forum.questions.most-viewed'
      },
      {
        label: 'most-voted',
        id: 'voted',
        icon: 'plus',
        linkTo: 'forum.questions.most-voted'
      }
    ];
  }.property('tabs')
});
