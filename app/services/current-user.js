import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({

  setup: function() {
    var self = this,
      dfd = jQuery.Deferred();

    $.getJSON(ENV.APP.CURRENT_USER_PATH, (resp) => {
        var current_user = self.store.createRecord('user', resp.user);
        self.set('model', current_user);
        dfd.resolve(current_user);
      },(resp) => {
        var current_user = self.store.createRecord('user', ENV.APP.GUEST_ATTR);
        self.set('model', current_user);
        dfd.resolve(current_user);
        console.log('You are not logged in');
      }
    );

    return dfd.promise();
  }
});
