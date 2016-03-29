import Ember from 'ember';
import ScrollPaginationMixin from '../../../mixins/scroll-pagination';
import { module, test } from 'qunit';

module('Unit | Mixin | scroll pagination');

// Replace this with your real tests.
test('it works', function(assert) {
  let ScrollPaginationObject = Ember.Object.extend(ScrollPaginationMixin);
  let subject = ScrollPaginationObject.create();
  assert.ok(subject);
});
