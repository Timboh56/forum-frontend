import Ember from 'ember';
import RouteHelpers from '../../mixins/route-helpers';

export default Ember.Route.extend(RouteHelpers, {
  model(params) {
    var question = this.peekOrFind('question', params);
    return question.get('answers');
  }
});
