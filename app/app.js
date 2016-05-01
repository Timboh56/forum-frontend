import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

Ember.Logger.error = function (message, cause, stack) {
  console.log('Ember.Logger.error handler', message, cause, stack);
};

loadInitializers(App, config.modulePrefix);

export default App;
