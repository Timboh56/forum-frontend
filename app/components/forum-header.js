import Ember from 'ember';

export default Ember.Component.extend({
  tabs: [
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
  ],

  init() {
    var currentPath = this.container.lookup("controller:application").currentPath;
    const tabs = this.get('tabs');

    for (var i = 0; i < tabs.length; i ++) {
      if (currentPath.match(tabs[i].id)) this.set('selectedTab', tabs[i].label);
    }

    this._super();
  },

  actions: {
    goToLink: function(tab) {
      var link = tab.linkTo;
      this.get('router').transitionTo(link);
      this.set('selectedTab', tab.label);
      $('.active').removeClass('active');
      this.rerender();
    }

  }
});
