import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({

  getCredentials: function() {
    var self = this,
      username = Cookies.get('mentormint-username');

    return new Ember.RSVP.Promise(function(resolve, reject) {
      $.ajax({
        type: 'POST',
        url: ENV.APP.LOGIN_PATH,
        data: {
         username: username || ENV.APP.TEST_USERNAME,
        },

        dataType: 'json',

        beforeSend(xhr) {
          xhr.setRequestHeader('AUTHORIZATION', ENV.APIKEY);
        },

        success: function(response) {
          self.set('authToken', response.auth_token);
          self.set('authUsername', response.username);
          resolve(response.auth_token);

          Ember.$.ajaxPrefilter(function( options, oriOptions, jqXHR ) {
            jqXHR.setRequestHeader("AUTHORIZATION_TOKEN", response.auth_token);
            jqXHR.setRequestHeader("AUTHORIZATION_USERNAME", response.username);
          });
        },

        error: function(response) {
          reject();
        }
      });
    });
  },
});
