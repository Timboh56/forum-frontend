import Ember from 'ember';
//import ApplicationRoute from '../../routes/application';
import RouteHelpers from '../../mixins/route-helpers';

export default Ember.Route.extend(RouteHelpers, {
  queryParams: {
    question: {
      refreshModel: false
    }
  },
  model(params) {
    return this.peekOrFindAll('question', params);
  },

  setupController(controller, model) {
    controller.set('model', model);
    this.controllerFor('forum.questions.newest').set('sortedModel', model);
    this.controllerFor('forum.questions.most-viewed').set('sortedModel', model);
    this.controllerFor('forum.questions.most-voted').set('sortedModel', model);
  }
});
