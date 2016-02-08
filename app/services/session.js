import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({

  getCredentials: function() {
    var self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      $.ajax({
        type: 'POST',
        url: ENV.APP.LOGIN_PATH,
        data: {
          username: ENV.APP.TEST_USERNAME, //from cookie
          hash: "" // from cookie
        },
        dataType: 'json',

        beforeSend(xhr) {
          xhr.setRequestHeader('AUTHORIZATION', ENV.APIKEY);
        },

        success: function(response) {
          self.set('authToken', response.auth_token);
          self.set('authUserId', response.user_id);
          resolve(response.auth_token);
        },

        error: function(response) {
          reject();
        }
      });
    });
  },
});
