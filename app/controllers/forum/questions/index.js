import Ember from 'ember';
import ENV from '../../../config/environment';
import SortedList from '../../../mixins/sorted-list';

export default Ember.Controller.extend(SortedList, {
  tabs: ENV.RESOURCES.FORUM_TABS,
  queryParams: ['keywords', 'limit', 'query']
});
