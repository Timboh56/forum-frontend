import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({

  getCredentials: function() {
    var self = this,
      username = Cookies.get('User') || 'test_user',
      token = Cookies.get('Token');

    return self.get('login').apply(this, [{
      username: username,
      token: token
    }]);
  },

  login: function(params) {
    var self = this,
      email = params['email'],
      username = params['username'],
      token = params['token'],
      password = params['password'];

    return new Ember.RSVP.Promise(function(resolve, reject) {
      if(username || token || email || pasword) {
        $.ajax({
          type: 'POST',
          url: ENV.APP.LOGIN_PATH,
          data: {
            email: email,
            username: username,
            token: token,
            password: password
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
      } else reject();
    });
  }
});
