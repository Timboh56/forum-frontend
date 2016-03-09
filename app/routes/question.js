import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.id, { reload: true });
  },

  setupController: function(controller, model) {
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
        label: 'oldest',
        id: 'oldest',
        icon: 'plus',
        linkTo: 'question.oldest',
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
