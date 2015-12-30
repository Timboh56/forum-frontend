import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({

  setup: function() {
    var self = this,
      dfd = jQuery.Deferred();

    if(ENV.environment === 'development') {
      var current_user = self.store.createRecord('user', ENV.APP.TEST_USER_ATTR);
      self.set('model', current_user);
      dfd.resolve(current_user);
    } else {
      jQuery.ajax({
        type: 'GET',
        dataType: 'json',
        url: ENV.APP.CURRENT_USER_PATH,

        success: function(resp) {
          var current_user = self.store.createRecord('user', resp);
          self.set('model', current_user);
          dfd.resolve(current_user);
        },

        error: function(resp) {
          var current_user = self.store.createRecord('user', ENV.APP.GUEST_ATTR);
          self.set('model', current_user);
          dfd.resolve(current_user);
          console.log('You are not logged in');
        }
      });
    }

    return dfd.promise();
  }
});
