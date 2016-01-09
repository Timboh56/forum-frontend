import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['keywords'],
  init: function() {

  },

  actions: {
    searchItems(keyword) {
      var self = this;
      self.get('search').apply(
        self, [keyword, 'question', 'model'])
      .then((function(resp, klass){
        this.set('model', resp);
      }).bind(this));
    }
  }
});
