import Ember from 'ember';
import ENV from '../../config/environment';
import ScrollPagination from '../../mixins/scroll-pagination';

export default Ember.Controller.extend(ScrollPagination, {
  tabs: ENV.RESOURCES.FORUM_TABS
});