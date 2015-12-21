export function initialize(application) {
  application.inject('components', 'notifications', 'service:notifications');
  application.inject('routes', 'notifications', 'service:notifications');
  application.inject('views', 'notifications', 'service:notifications');
}

export default {
  name: 'notifications',
  initialize
};
