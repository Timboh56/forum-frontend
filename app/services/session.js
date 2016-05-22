import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({

  getCredentials: function() {
    var self = this,
      username = Cookies.get('User'),
      token = Cookies.get('Token'),
      apiToken = Cookies.get('_mentormint-api_session');
      console.log(username);
      console.log(token);
      var x = document.cookie;

      console.log(x);


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
