import Ember from 'ember';

export default Ember.Component.extend({
  loadingSpinner: Ember.inject.service('loading-spinner'),
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
      var link = tab.linkTo,
        self = this,
        LoadingSpinner = self.get('loadingSpinner');

      LoadingSpinner.start();

      if (tab.recordId)
        this.get('router').transitionTo(link, tab.recordId).then(LoadingSpinner.stop);
      else
        this.get('router').transitionTo(link).then(LoadingSpinner.stop);

      if (tab.count && tab.modelName)
        this.set('forumHeaderLabel', tab.count + ' ' + tab.modelName + '(s)')

      this.set('selectedTab', tab.label);

      this.rerender();
    }

  }
});
