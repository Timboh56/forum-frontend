import Ember from 'ember';

export default Ember.Component.extend({
  tabs: [
    {
      label: 'newest',
      icon: 'edit',
      linkTo: 'forum.questions.index'
    },
    {
      label: 'most-viewed',
      icon: 'plus',
      linkTo: 'forum.questions.most-viewed'
    },
    {
      label: 'most-voted',
      icon: 'plus',
      linkTo: 'forum.questions.most-voted'
    },
    {
      label: 'all-posts',
      icon: 'edit',
      linkTo: 'forum.questions.index'
    }
  ],

  labelActive: function(label) {
    return true;
  }.property('labelIsActive'),

  init() {
    const currentPath = this.container.lookup("controller:application").currentPath;
    const tabs = this.get('tabs');

    for (var i = 0; i < tabs.length; i ++) {
      if (currentPath.match(tabs[i].label)) this.set(tabs[i].label, true);
    }

    this._super();
  }
});
