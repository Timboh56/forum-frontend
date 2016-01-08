import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    //var current_user = this.get('current-user').model;
    var self = this;
    var param = this.modelFor('question');

    /**$.ajax({
      type: 'GET',
      dataType: 'json',
      url: ''

    });**/
    var question = this.store.query('question', { param: param });

    return question;
  }
});
