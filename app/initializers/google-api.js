export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
  application.inject('component', 'google-api', 'service:google-api');
}

export default {
  name: 'google-api',
  initialize
};
