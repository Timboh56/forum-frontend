import Ember from 'ember';
import StoreInjectionInitializer from '../../../initializers/store-injection';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | store injection', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  StoreInjectionInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
