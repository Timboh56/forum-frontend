import Ember from 'ember';

export default Ember.Component.extend({
  init: function() {
    var store = this.get('targetObject.store');
    this._super();
  }
});
