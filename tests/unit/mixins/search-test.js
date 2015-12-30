import Ember from 'ember';
import SearchMixin from '../../../mixins/search';
import { module, test } from 'qunit';

module('Unit | Mixin | search');

// Replace this with your real tests.
test('it works', function(assert) {
  let SearchObject = Ember.Object.extend(SearchMixin);
  let subject = SearchObject.create();
  assert.ok(subject);
});
