import Ember from 'ember';
import Search from '../mixins/search';
//import ApplicationRoute from '../routes/application';

export default Ember.Route.extend(Search, {
  setupController: function(controller) {
    this.get('setupSearch').call(this, ['forum', 'forum.questions'], 'model');
  }
});
