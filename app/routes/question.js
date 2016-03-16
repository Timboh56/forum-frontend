import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('question', params.id, { reload: true });
  },

  setupController(controller, model) {
    let answers = model.get('answers');
    controller.set('model', model);
    this.controllerFor('question.newest').set('sortedModel', answers);
    this.controllerFor('question.most-viewed').set('sortedModel', answers);
    this.controllerFor('question.most-voted').set('sortedModel', answers);

    controller.set('tabs', [
      {
        label: 'all-answers',
        id: 'index',
        icon: 'edit',
        linkTo: 'question.index',
        recordId: model.id
      },
      {
        label: 'newest',
        id: 'newest',
        icon: 'edit',
        linkTo: 'question.newest',
        recordId: model.id
      },
      {
        label: 'most-viewed',
        id: 'most-viewed',
        icon: 'plus',
        linkTo: 'question.most-viewed',
        recordId: model.id
      },
      {
        label: 'most-voted',
        id: 'voted',
        icon: 'plus',
        linkTo: 'question.most-voted',
        recordId: model.id
      }
    ]);
  }
});
