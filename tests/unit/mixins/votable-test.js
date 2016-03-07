import Ember from 'ember';
import VotableMixin from '../../../mixins/votable';
import { module, test } from 'qunit';

module('Unit | Mixin | votable');

// Replace this with your real tests.
test('it works', function(assert) {
  let VotableObject = Ember.Object.extend(VotableMixin);
  let subject = VotableObject.create();
  assert.ok(subject);
});
