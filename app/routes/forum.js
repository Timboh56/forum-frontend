import Ember from 'ember';
import Search from '../mixins/search';

export default Ember.Route.extend(Search, {
  setupController: function() {
    this.get('setupSearch').call(this, 'forum');
  }
});
