import Ember from 'ember';
import ENV from '../config/environment';

var NotificationsService = Ember.Service.extend({
  init: function() {
    if(!this.get('webSocket')) {
      var ws = window.ws = new WebSocket(ENV.APP.NOTIFICATIONS_WEBSOCKETS_URI);
      ws.onmessage = this.get('onMessage');
      this.set('webSocket', ws);
    }

    if(this.get('current-user.model.status') != 0) this.getMessages();
  },

  getMessages: function() {
    var current_id = this.get('current-user.model.id');
    jQuery.get(ENV.APP.NOTIFICATIONS_SERVER_URI + 'channels/' + current_id);
  },

  pushMessage: function(channel, content) {

  },

  onMessage: function(resp) {
  }
});

export default NotificationsService;