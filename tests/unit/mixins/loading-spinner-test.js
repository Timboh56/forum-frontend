import Ember from 'ember';
import LoadingSpinnerMixin from '../../../mixins/loading-spinner';
import { module, test } from 'qunit';

module('Unit | Mixin | loading spinner');

// Replace this with your real tests.
test('it works', function(assert) {
  let LoadingSpinnerObject = Ember.Object.extend(LoadingSpinnerMixin);
  let subject = LoadingSpinnerObject.create();
  assert.ok(subject);
});
