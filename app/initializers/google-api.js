export function initialize(container, application) {
  // application.inject('route', 'foo', 'service:foo');
  application.inject('component', 'google-api', 'service:google-api');
}

export default {
  name: 'google-api',
  after: ['ember-data', 'store-injection'],
  initialize
};
