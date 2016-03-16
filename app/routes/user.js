import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('user', params.id);
  },

  setupController: function(controller, model) {
    controller.set('model', model);
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
        label: 'oldest',
        id: 'oldest',
        icon: 'plus',
        linkTo: 'user.oldest',
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
