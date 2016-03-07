import Ember from 'ember';

export default Ember.Component.extend({

  tabIsActive: function() {
    return this.get('selectedTab') == this.get('tab.label');
  }.property('tabIsActive'),

  actions: {
    goToLink: function() {
      this.sendAction('action', this.get('tab'));
    }
  }
});
