import Ember from 'ember';
import SearchForumsMixin from '../mixins/search-forums';

export default Ember.Component.extend(SearchForumsMixin, {
  prevKeywords: '',
  keywords: '',
  hideResults: true,
  tagName: ['span'],
  showingResults: (function() {
    if (this.get('model.length') > 0)
      this.set('showResults', true);
    else
      this.set('showResults', false);

  }).observes('model'),

  currentUser: Ember.computed(function() {
    return this.get('current-user.model');
  }),

  init: function() {
    var self = this;
    setInterval(
      function() {

        var currKeywords = self.get('keywords'),
          prevKeywords = self.get('prevKeywords');

        if (currKeywords != prevKeywords) {
          self.get('actions.searchItems').apply(self, [currKeywords]);
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
