import Ember from 'ember';
import SearchForumsMixin from '../mixins/search-forums';

export default Ember.Component.extend(SearchForumsMixin, {
  prevKeywords: '',
  keywords: '',
  showResults: false,
  tagName: ['span'],
  showingResults: (function() {
    var self = this;
    if (this.get('model.length') > 0) {
      this.set('showResults', true);
      window.document.body.addEventListener('click', function() {
        self.set('showResults', false);
      });
    } 

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
          self.set('showResults', true);
          self.get('actions.searchItems').apply(self, [currKeywords]);
        }
        self.set('prevKeywords', currKeywords)
    }, 1000);

    this._super();
  }
});
