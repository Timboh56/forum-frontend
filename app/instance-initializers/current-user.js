export function initialize(container) {
  container.inject('service:notifications', 'current-user', 'service:current-user');
  container.inject('route', 'current-user', 'service:current-user');
  container.inject('component', 'current-user', 'service:current-user');
  container.inject('controller', 'current-user', 'service:current-user');
  container.inject('adapter', 'current-user', 'service:current-user');
  container.inject('component', 'notifications', 'service:notifications');
}

export default {
  name: 'current-user',
  after: ['ember-data'],
  initialize
};
