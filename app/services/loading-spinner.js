import Ember from 'ember';

export default Ember.Service.extend({
  start: function() {
    $('.loading-container').removeClass('hide');
  },

  stop: function() {
    $('.loading-container').addClass('hide');
  }
});
