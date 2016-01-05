import Ember from 'ember';

export default Ember.Controller.extend({

  init: function() {

  },

  actions: {
    searchItems(keyword) {
      this.get('search').apply(this, [keyword, 'question']);
    }
  }
});
