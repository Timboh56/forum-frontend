import Ember from 'ember';

export default Ember.Component.extend({
  prevKeywords: '',
  keywords: '',
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
});
