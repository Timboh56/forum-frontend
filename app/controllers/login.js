import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  options: {
    email: '',
    password: ''
  },

  actions: {
    login() {
      let options = this.get('options'),
        Session = this.get('session');

      return new Ember.RSVP.Promise((resolve, reject) => {
          Ember.$.ajax({
            url: ENV.APP.LOGIN_PATH,
            type: 'POST',
            data: JSON.stringify({
                username: options.email,
                password: options.password
            }),
            beforeSend(xhr) {
              xhr.setRequestHeader('Accept', 'application/vnd.api+json');
              xhr.setRequestHeader('AUTHORIZATION_TOKEN',Session.get('authToken'));
              xhr.setRequestHeader('AUTHORIZATION', ENV.APIKEY);
            },
            contentType: 'application/json;charset=utf-8',
            dataType: 'json'
          }).then(function(response) {
            Ember.run(function() {
              resolve({
                token: response.id_token
              });
            });
          }, function(xhr, status, error) {
              var response = xhr.responseText;
              Ember.run(function() {
                  reject(response);
              });
          });
      });
    }
  }
});
