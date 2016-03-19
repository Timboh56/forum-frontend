import Ember from 'ember';
import ENV from '../config/environment';
export default Ember.Route.extend({

  model(params) {
    console.log(params);
    console.log('from question route');
    return this.store.find('question', params.id);
  },

  setupController(controller, model) {
    let answers = model.get('answers');
    let tabs = ENV.RESOURCES.QUESTION_TABS;
    controller.set('model', model);
    this.controllerFor('question.index').set('model', answers);
    this.controllerFor('question.newest').set('sortedModel', answers);
    this.controllerFor('question.most-voted').set('sortedModel', answers);

    for (var tab in tabs) tabs[tab]['recordId'] = model.id
    controller.set('tabs', tabs);
  }
});
