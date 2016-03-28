import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Route.extend({
  model() {
    return this.get('current-user.model.bookmarks');
  },

  setupController(controller, model) {
    let tabs = ENV.RESOURCES.BOOKMARK_TABS;
    controller.set('tabs', tabs);
  },

  actions: {
    bookmarkCallback(bookmarkableId) {
      Ember.$('#' + bookmarkableId).fadeOut();
    }
  }
});
