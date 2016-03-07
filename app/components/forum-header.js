import Ember from 'ember';

export default Ember.Component.extend({

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
