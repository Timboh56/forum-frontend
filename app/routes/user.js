import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('user', params.id);
  },

  setupController: function(controller, model) {
    let questions = model.get('questions');
    let answers = model.get('answers');
    controller.set('model', model);
    this.controllerFor('user.index').set('model', questions);
    this.controllerFor('user.answers').set('answers', answers);

    controller.set('tabs', [
      {
        label: 'questions',
        id: 'index',
        icon: 'edit',
        linkTo: 'user.index',
        recordId: model.id
      },
      {
        label: 'answers',
        id: 'answers',
        icon: 'edit',
        linkTo: 'user.answers',
        recordId: model.id
      }
    ]);
  }
});