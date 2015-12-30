import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['hidden-xs', 'dropdown'],
  classNameBindings: ['isOpen:open'],
  tagName: 'li',
  isOpen: false,
  actions: {
    toggleDropdown: function() {
      this.toggleProperty('isOpen');
    }
  }
});
