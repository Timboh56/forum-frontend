import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Route.extend({
  model() {
    return this.get('current-user.model.bookmarks');
  },

  setupController(controller, model) {
    let tabs = ENV.RESOURCES.BOOKMARK_TABS;
    controller.set('tabs', tabs);
    controller.set('model', model);
    this.controllerFor('forum.bookmarks.index').set('sortedModel', model);
    this.controllerFor('forum.bookmarks.newest').set('sortedModel', model);
    this.controllerFor('forum.bookmarks.most-active').set('sortedModel', model);
  },

  actions: {
    bookmarkCallback(bookmarkableId) {
      Ember.$('#' + bookmarkableId).fadeOut();
    }
  }
});
