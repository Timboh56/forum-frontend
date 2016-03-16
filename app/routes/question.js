import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.id, { reload: true });
  },

  setupController: function(controller, model) {
    let answers = model.get('answers');
    this.controllerFor('question.newest').set('model', answers);
    this.controllerFor('question.most-voted').set('model', answers);
    this.controllerFor('question.most-viewed').set('model', answers);
    this.controllerFor('question.index').set('model', answers);

    controller.set('model', model);
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
