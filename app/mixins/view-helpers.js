import Ember from 'ember';

export default Ember.Mixin.create({
  scrollToRecordContainer(recordName, id) {
    Ember.$('html, body').animate({
      scrollTop: $('#' + recordName + '-' + id).offset().top
    }, 1000);
  },

  scrollToTop() {
    Ember.$('html, body').animate({
      scrollTop: 0
    }, 1000);
  }
});
