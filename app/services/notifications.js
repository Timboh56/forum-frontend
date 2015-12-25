import Ember from 'ember';
import ENV from '../config/environment';

var NotificationsService = Ember.Service.extend({
  store: Ember.inject.service(),

  setup: function(current_user) {
    var dfd = jQuery.Deferred(),
      query_string = '?user_id=' + current_user.id;

    if(!this.get('webSocket')) {
      var ws = window.ws = new WebSocket(ENV.APP.NOTIFICATIONS_WEBSOCKETS_URI + query_string);
      ws.onmessage = this.get('onMessage');
      this.set('webSocket', ws);
    }

    if(current_user.status != 0) {
      this.getMessages(current_user).then(function() {
        dfd.resolve();
      });
    }
    return dfd.promise();
  },

  getMessages: function(current_user) {
    var dfd = jQuery.Deferred(),
      current_id = current_user.id,
      resource_path = 'users/' + current_id + '/notifications',
      arr = [],
      self = this;

    jQuery.ajax({
      type: 'GET',
      dataType: 'JSON',
      url: ENV.APP.NOTIFICATIONS_SERVER_URI + resource_path,
      success: function(resp) {
        if(resp.data && resp.data.length > 0) {
          for(var i = 0; i < resp.data.length; i++)
            arr.push(self.get('store').createRecord('notification', resp.data[i]));                                                   
        }

        dfd.resolve(arr);
      },
      error: function(resp) {
        dfd.resolve();
      }
    });

    return dfd.promise();
  },

  pushMessage: function(channel, content) {

  },

  onMessage: function(resp) {
    debugger
  }
});

export default NotificationsService;