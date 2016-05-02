import Ember from 'ember';
import ENV from '../../config/environment';

export default Ember.Controller.extend({
  tabs: ENV.RESOURCES.FORUM_TABS,
  keywords: null
});
