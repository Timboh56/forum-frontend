import Ember from 'ember';
import SortedList from '../../../mixins/sorted-list';

export default Ember.Route.extend(SortedList, {
  model: function() {
    return this.store.query('question', { mostActive: true });
  },

  setupController(controller, model) {
    controller.set('model', model);
    controller.set('sortedModel', model);
  }
});
