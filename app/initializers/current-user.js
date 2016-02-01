export function initialize(application) {
  application.inject('service:notifications', 'current-user', 'service:current-user');
  application.inject('route', 'current-user', 'service:current-user');
  application.inject('component', 'current-user', 'service:current-user');
  application.inject('controller', 'current-user', 'service:current-user');
  application.inject('adapter', 'current-user', 'service:current-user');
  application.inject('component', 'notifications', 'service:notifications');
}

export default {
  name: 'current-user',
  initialize
};
