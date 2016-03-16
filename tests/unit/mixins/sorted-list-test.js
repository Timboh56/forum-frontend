import Ember from 'ember';
import SortedListMixin from '../../../mixins/sorted-list';
import { module, test } from 'qunit';

module('Unit | Mixin | sorted list');

// Replace this with your real tests.
test('it works', function(assert) {
  let SortedListObject = Ember.Object.extend(SortedListMixin);
  let subject = SortedListObject.create();
  assert.ok(subject);
});
