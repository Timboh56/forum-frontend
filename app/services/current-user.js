import Ember from 'ember';
import ENV from '../config/environment';
import App from '../app';

export default Ember.Service.extend({

  getCurrentUser: function() {
    var self = this;
    var dfd = jQuery.Deferred();

    jQuery.ajax({
      type: 'GET',
      dataType: 'json',
      url: ENV.APP.CURRENT_USER_PATH,

      success: function(resp) {
        var current_user = self.store.createRecord('user', resp);
        container.injection
        self.set('model', current_user);
        self._super();
        dfd.resolve();
      },

      error: function(resp) {
        var current_user = self.store.createRecord('user', ENV.APP.GUEST_ATTR);
        self.set('model', current_user);
        self._super();
        dfd.resolve();
      }
    });

    return dfd.promise();
  }
});
