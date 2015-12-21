export function initialize(application) {
  application.inject('component', 'store', 'service:store');
  application.inject('service:current-user', 'store', 'service:store');
}

export default {
  name: 'store-injection',
  initialize
};
