import Ember from 'ember';

export default Ember.Component.extend({

  init() {

    var currentPath = this.container.lookup("controller:application").currentPath;
    const tabs = this.get('tabs');

    if (tabs) {
      for (var i = 0; i < tabs.length; i ++) {
        if (currentPath.match(tabs[i].id)) this.set('selectedTab', tabs[i].label);
      }
    }

    this._super();
  },

  actions: {
    goToLink: function(tab) {
      var link = tab.linkTo;

      if (tab.recordId)
        this.get('router').transitionTo(link, tab.recordId);
      else
        this.get('router').transitionTo(link);

      this.set('selectedTab', tab.label);

      this.rerender();
    }

  }
});
