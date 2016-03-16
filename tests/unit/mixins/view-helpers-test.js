import Ember from 'ember';
import ViewHelpersMixin from '../../../mixins/view-helpers';
import { module, test } from 'qunit';

module('Unit | Mixin | view helpers');

// Replace this with your real tests.
test('it works', function(assert) {
  let ViewHelpersObject = Ember.Object.extend(ViewHelpersMixin);
  let subject = ViewHelpersObject.create();
  assert.ok(subject);
});
