import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  router: Ember.inject.router('main'),
  actions: {
    searchTag(tag) {
      var self = this,
        router = self.get('router');
      return this.store.query('tag', { text: tag }).then((resp) => {
        router.transitionTo('forum.questions.index');
      });
    }
  }
});
