import Ember from 'ember';
import BookmarkableActionMixin from '../../../mixins/bookmarkable-action';
import { module, test } from 'qunit';

module('Unit | Mixin | bookmarkable action');

// Replace this with your real tests.
test('it works', function(assert) {
  let BookmarkableActionObject = Ember.Object.extend(BookmarkableActionMixin);
  let subject = BookmarkableActionObject.create();
  assert.ok(subject);
});
