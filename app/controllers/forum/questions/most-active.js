import Ember from 'ember';
import ENV from '../../../config/environment';
import SortedList from '../../../mixins/sorted-list';
import IndexController from '../questions/index';

export default Ember.Controller.extend(SortedList, {
  tabs: ENV.RESOURCES.FORUM_TABS,
});
