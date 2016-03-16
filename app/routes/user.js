import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('user', params.id);
  },

  setupController: function(controller, model) {
    let questions = model.get('questions');
    controller.set('model', model);
    this.controllerFor('user.index').set('sortedModel', questions);
    this.controllerFor('user.newest').set('sortedModel', questions);
    this.controllerFor('user.most-voted').set('sortedModel', questions);
    this.controllerFor('user.most-viewed').set('sortedModel', questions);

    controller.set('tabs', [
      {
        label: 'all',
        id: 'index',
        icon: 'edit',
        linkTo: 'user.index',
        recordId: model.id
      },
      {
        label: 'newest',
        id: 'newest',
        icon: 'edit',
        linkTo: 'user.newest',
        recordId: model.id
      },
      {
        label: 'most-viewed',
        id: 'most-viewed',
        icon: 'plus',
        linkTo: 'user.most-viewed',
        recordId: model.id
      },
      {
        label: 'most-voted',
        id: 'voted',
        icon: 'plus',
        linkTo: 'user.most-voted',
        recordId: model.id
      }
    ]);
  }
});
