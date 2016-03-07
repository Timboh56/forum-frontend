import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    beforeModel: function() {
      $('.loading-container').removeClass('hide');
    },

    didTransition: function() {
      $('.loading-container').addClass('hide')
    }
  }
});