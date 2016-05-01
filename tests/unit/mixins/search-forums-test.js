import Ember from 'ember';
import SearchForumsMixin from '../../../mixins/search-forums';
import { module, test } from 'qunit';

module('Unit | Mixin | search forums');

// Replace this with your real tests.
test('it works', function(assert) {
  let SearchForumsObject = Ember.Object.extend(SearchForumsMixin);
  let subject = SearchForumsObject.create();
  assert.ok(subject);
});
