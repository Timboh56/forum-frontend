export function initialize(application) {
  application.inject('route', 'session', 'service:session');
  application.inject('service:current-user', 'session', 'service:session');
}

export default {
  name: 'session',
  initialize
};
