import Ember from 'ember';
import ENV from '../../../config/environment';

export default Ember.Controller.extend({
  tabs: ENV.RESOURCES.FORUM_TABS,

  sortedList: function() {
    return Ember.ArrayProxy.create({
      content: this.get('model')
    }).sortBy('createdAt').reverse();
  }.property('model')
});
