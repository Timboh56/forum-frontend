import Ember from 'ember';
import ENV from '../config/environment';
 
export default Ember.Service.extend({
  init: function() {
    jQuery.get('https://apis.google.com/js/api.js', function(res) {
      debugger
    });
  }
});
