import Ember from 'ember';

export default Ember.Component.extend({

  selectedTabChanged: function() {

    this.set('tabIsActive',  this.get('selectedTab') == this.get('tab.label'));

  }.observes('selectedTab'),

  tabIsActive: function() {
    return this.get('selectedTab') == this.get('tab.label');
  }.property('tabIsActive'),

  actions: {
    goToLink: function() {
      var self = this;
      this.init();
      this.sendAction('action', this.get('tab'));
    }
  }
});
