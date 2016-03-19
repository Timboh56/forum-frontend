import Ember from 'ember';
//import ApplicationRoute from '../../routes/application';

export default Ember.Route.extend({
  queryParams: {
    question: {
      refreshModel: false
    }
  },
  model(params) {
    return this.store.findAll('question', params);
  },

  setupController(controller, model) {
    controller.set('model', model);
    this.controllerFor('forum.questions.newest').set('sortedModel', model);
    this.controllerFor('forum.questions.most-active').set('sortedModel', model);
    this.controllerFor('forum.questions.most-voted').set('sortedModel', model);
  }
});
