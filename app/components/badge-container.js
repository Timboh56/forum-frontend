import Ember from 'ember';
import TooltipsComponent from 'ember-tooltips/mixins/components/tooltips';

export default Ember.Component.extend(TooltipsComponent, {
  tagName: 'span',
  classNames: 'm-r-md',
  init() {
    this.renderChildTooltips();
    this._super();
  }
});
