export function initialize(application) {
  application.inject('component', 'store', 'service:store');
  application.inject('service:current-user', 'store', 'service:store');
  application.inject('mixin:search', 'store', 'service:store');
  application.inject('mixin:commentable', 'store', 'service:store');
}

export default {
  name: 'store-injection',
  initialize
};
