import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    searchItems(keyword) {
      this.get('search').apply(this, [keyword, 'question']);
    }
  }
});
