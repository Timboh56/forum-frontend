import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.queryRecord('user', {id: params.id});
  },

  setupController: function(controller, model) {
    let questions = model.get('questions');
    let answers = model.get('answers');
    controller.set('model', model);
    this.controllerFor('user.index').set('questions', questions);
    this.controllerFor('user.answers').set('answers', answers);

    controller.set('tabs', [
      {
        label: 'questions',
        id: 'index',
        icon: 'edit',
        linkTo: 'user.index',
        modelName: 'question',
        recordId: model.id,
        count: questions.length
      },
      {
        label: 'answers',
        id: 'answers',
        icon: 'edit',
        linkTo: 'user.answers',
        modelName: 'answer',
        recordId: model.id,
        count: answers.length
      }
    ]);
  }
});
