import Ember from 'ember';
import TaggableMixin from '../../../mixins/taggable';
import { module, test } from 'qunit';

module('Unit | Mixin | taggable');

// Replace this with your real tests.
test('it works', function(assert) {
  let TaggableObject = Ember.Object.extend(TaggableMixin);
  let subject = TaggableObject.create();
  assert.ok(subject);
});
