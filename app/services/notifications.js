import Ember from 'ember';
import ENV from '../config/environment';

var NotificationsService = Ember.Service.extend({
  store: Ember.inject.service(),

  setup: function(currentUser) {
    var dfd = jQuery.Deferred(),
      query_string = '?user_id=' + currentUser.id;

    if(!this.get('ws')) {
      var ws = window.ws = new WebSocket(ENV.APP.NOTIFICATIONS_WEBSOCKETS_URI + query_string);
      ws.onmessage = this.get('onNotification');
      this.set('ws', ws);
    }

    if(currentUser.status != 0) {
      this.getNotifications(currentUser).then(function() {
        dfd.resolve();
      });
    }
    return dfd.promise();
  },

  getMessages: function(currentUser) {
    var dfd = jQuery.Deferred(),
      current_id = currentUser.id,
      resource_path = 'users/' + current_id + '/messages',
      arr = [],
      self = this;


    var promise = new Ember.RSVP.Promise((fullfill, reject) => {
      jQuery.ajax({
        type: 'GET',
        dataType: 'json',
        url: ENV.APP.NOTIFICATIONS_SERVER_URI + resource_path,
        success: function(resp) {
          if(resp.data && resp.data.length > 0) {
            for(var i = 0; i < resp.data.length; i++)
              arr.push(self.get('store').createRecord('message', resp.data[i]));
          }
          fullfill(resp);
        },
        error: function(resp) {
          reject(resp);
        },

        complete: function(resp) {
        }
      });

    }).then((resp) => {
      dfd.resolve(resp);
    }, (resp) => {
      dfd.reject();
    });

  },

  getNotifications: function(currentUser) {
    var dfd = jQuery.Deferred(),
      current_id = currentUser.id,
      resource_path = 'users/' + current_id + '/notifications',
      arr = [],
      self = this;

    var promise = new Ember.RSVP.Promise((fullfill, reject) => {
      jQuery.ajax({
        type: 'GET',
        dataType: 'json',
        url: ENV.APP.NOTIFICATIONS_SERVER_URI + resource_path,
        success: function(resp) {
          if(resp.data && resp.data.length > 0) {
            for(var i = 0; i < resp.data.length; i++)
              arr.push(self.get('store').createRecord('notification', resp.data[i]));
          }
          fullfill(resp);
        },
        error: function(resp) {
          reject(resp);
        },

        complete: function(resp) {
        }
      });

    }).then((resp) => {
      dfd.resolve();
    }, (resp) => {
      dfd.reject();
    });


    // return this.get('store').query('notification', { user_id: currentUser.id });
    // this currently doesnt work with ember cli mirage because notifications
    // server does not work with store.query or store.find
    // notifications server is separate.

    
    return dfd.promise();
  },

  pushNotification: function(user_id, text, event_type) {
    var event_type = event_type || 'push';
    this.get('ws').send({
      event_type: event_type,
      user_id: user_id,
      text: text
    });
  },

  deleteNotification: function(user_id, notification_id) {
    this.get('ws').send({
      event_type: 'delete',
      user_id: user_id,
      notification_id: notification_id
    });
  },

  onNotification: function(resp) {
    debugger
  },

  sendMessage: function(receiver_id, sender_id, text) {
    this.get('ws').send({
      event_type: 'sendMessage',
      receiver_id: receiver_id,
      sender_id, sender_id,
      text: text
    });
  },

});

export default NotificationsService;