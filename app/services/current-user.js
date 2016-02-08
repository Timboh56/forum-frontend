import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({
  getCurrentUser: function() {
    var self = this,
      SessionService = this.get('session');

    return new Ember.RSVP.Promise(function(resolve, reject) {
      $.ajax({
        type: 'GET',
        dataType: 'json',
        url: ENV.APP.CURRENT_USER_PATH,
        contentType: 'application/json',

        beforeSend(xhr) {
          //xhr.setRequestHeader('AUTHORIZATION-USERID', self.get('session.authUserId'));
          xhr.setRequestHeader('AUTHORIZATION-USERNAME', self.get('session.authUsername'));
          xhr.setRequestHeader('AUTHORIZATION-TOKEN',self.get('session.authToken'));
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
