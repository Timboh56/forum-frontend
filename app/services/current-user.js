import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({

  setup: function() {
    var self = this;

    return new Ember.RSVP.Promise(function(resolve, reject) {
      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: ENV.APP.CURRENT_USER_PATH,

        beforeSend(xhr) {
          xhr.setRequestHeader('AUTHORIZATION', ENV.APIKEY);
        },

        success: (resp) => {
          var current_user = self.store.createRecord('user', resp.user);
          self.set('model', current_user);
          resolve(current_user);
        },

        error: (resp) => {
          var current_user = self.store.createRecord('user', ENV.APP.GUEST_ATTR);
          self.set('model', current_user);
          resolve(current_user);
          console.log('You are not logged in');
        }
      });

    })
  }
});
