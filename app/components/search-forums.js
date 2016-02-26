import Ember from 'ember';

export default Ember.Component.extend({
  prevKeywords: '',
  keywords: '',
  showResults: true,
  showingResults: (function() {
    if (this.get('model.length') > 0)
      this.set('showResults', true);
  }).observes('model'),

  init: function() {
    var self = this;
    setInterval(
      function() {

        var currKeywords = self.get('keywords'),
          prevKeywords = self.get('prevKeywords');

        if (currKeywords != prevKeywords) {
          self.sendAction('searchItems', currKeywords);
        }
        self.set('prevKeywords', currKeywords)
    }, 1000);

    this._super();
  },

  actions: {
    goToQuestion: function(id) {
      this.set('showResults', false);
      this.sendAction('goToQuestion', id);
    }
  }
});
