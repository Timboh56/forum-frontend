import Ember from 'ember';
import ENV from '../config/environment';

var camelize = Ember.String.camelize;

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
          xhr.setRequestHeader('Accept', 'application/vnd.api+json');
          xhr.setRequestHeader('AUTHORIZATION_TOKEN',self.get('session.authToken'));
          xhr.setRequestHeader('AUTHORIZATION', ENV.APIKEY);
        },

        success: (resp) => {
          var userAttr = resp.data.attributes;
          userAttr['id'] = resp.data.id;
          var current_user = self.store.createRecord('user', userAttr); //resp.data);

          self.set('model', current_user);
          self.store.pushPayload(resp);
          //  set relationships
          /**for(var i = 0; i < resp.included.length; i++) {
            const type = resp.included[i].type.slice(0, -1);
            const included = resp.included[i].attributes;

            // convert underscored attribute keys to camelcase
            for (var key in included)
              if(key.match('_')) included[camelize(key)] = included[key];

            included['id'] = resp.included[i].id;
            var relatedRecord = self.store.createRecord(type, included);
            relatedRecord.set('user', current_user);
          }**/

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
