import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({
  routing: Ember.inject.service('-routing'),

  getCredentials: function() {
    var self = this,
      username = Cookies.get('User'),
      token = Cookies.get('Token');
      console.log(username);
      console.log(token);
      var x = document.cookie;

      console.log(x);

    if( username && token) {
      return new Ember.RSVP.Promise(function(resolve, reject) {
        $.ajax({
          type: 'POST',
          url: ENV.APP.LOGIN_PATH,
          data: {
           username: username,
           token: token
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
    } else {
      console.log("You are not logged in");
      this.get("routing").transitionTo("login");
    }
  },
});
