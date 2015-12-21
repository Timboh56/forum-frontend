export function initialize(container) {
  container.lookup('service:current-user').getCurrentUser().then(function() {
    container.application.inject('service:notifications', 'current-user', 'service:current-user');
    container.application.inject('route', 'current-user', 'service:current-user');
    container.application.inject('component', 'current-user', 'service:current-user');
    container.application.inject('controller', 'current-user', 'service:current-user');
    container.application.inject('adapter', 'current-user', 'service:current-user');
    container.application.inject('component', 'notifications', 'service:notifications');
    container.lookup('service:notifications').init();
  }); 
}

export default {
  name: 'current-user',
  after: ['ember-data'],
  initialize
};
