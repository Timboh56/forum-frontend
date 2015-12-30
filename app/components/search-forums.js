import Ember from 'ember';

export default Ember.Component.extend({

  searchKeywords: (function() {
    var keywords = this.get('keywords');
    this.sendAction('searchItems', keywords);
  }).observes('keywords'),
});
