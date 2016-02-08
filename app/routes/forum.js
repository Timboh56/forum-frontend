import Ember from 'ember';
import Search from '../mixins/search';
import Commentable from '../mixins/commentable';
//import ApplicationRoute from '../routes/application';

export default Ember.Route.extend(Search, Commentable, {
  setupController: function(controller) {
    this.get('setupSearch').call(this, ['forum', 'forum.questions'], 'model');
    this.get('setupCommentable').call(this, ['forum', 'forum.questions']);
  }
});
