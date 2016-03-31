import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  router: Ember.inject.service('router:main'),
  actions: {
    searchTag(tagText) {
      var self = this,
        router = self.get('router');
      
      router.transitionTo('tag', tagText);
    }
  }
});
