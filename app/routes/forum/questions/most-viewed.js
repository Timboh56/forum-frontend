import Ember from 'ember';
import RouteHelpers from '../../../mixins/route-helpers';

export default Ember.Route.extend(RouteHelpers, {

  model: function(params) {
    return this.peekOrFind('question', params);
  }
});
