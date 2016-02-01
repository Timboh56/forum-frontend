export function initialize(container, application) {
  application.inject('components', 'notifications', 'service:notifications');
  application.inject('route', 'notifications', 'service:notifications');
  application.inject('views', 'notifications', 'service:notifications');
}

export default {
  name: 'notifications',
  after: ['current-user'],
  initialize
};
