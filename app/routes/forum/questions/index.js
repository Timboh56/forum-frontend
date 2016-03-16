import Ember from 'ember';
import RouteHelpers from '../../../mixins/route-helpers';

export default Ember.Route.extend(RouteHelpers, {
  queryParams: {
    question: {
      refreshModel: false
    }
  },
  model(params) {
    return this.peekOrFind('question', params);
  }
});