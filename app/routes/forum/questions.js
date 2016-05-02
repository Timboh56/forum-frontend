import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Route.extend({
  queryParams: {
    keywords: {
      refreshModel: true,
      refresh: true,
      replace: true
    }
  }
});
