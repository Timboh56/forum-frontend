import Ember from 'ember';
//import ApplicationRoute from '../../routes/application';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  scrollPagination: Ember.inject.service('scroll-pagination'),
  queryParams: {
    question: {
      refreshModel: false
    }
  },
  model(params) {
    //    return this.findPaged('todo',params);

    return this.findPaged('question', params);
  },

  setupController(controller, model) {
    controller.set('model', model);
    this.controllerFor('forum.questions.index').set('model', model);
    this.controllerFor('forum.questions.newest').set('sortedModel', model);
    this.controllerFor('forum.questions.most-active').set('sortedModel', model);
    this.controllerFor('forum.questions.most-voted').set('sortedModel', model);
    this.get('scrollPagination').initializePaginator(model);
  }
});
