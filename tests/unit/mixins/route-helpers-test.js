import Ember from 'ember';
import RouteHelpersMixin from '../../../mixins/route-helpers';
import { module, test } from 'qunit';

module('Unit | Mixin | route helpers');

// Replace this with your real tests.
test('it works', function(assert) {
  let RouteHelpersObject = Ember.Object.extend(RouteHelpersMixin);
  let subject = RouteHelpersObject.create();
  assert.ok(subject);
});
