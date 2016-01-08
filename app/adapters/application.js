import DS from 'ember-data';
import ENV from '../config/environment';

// app/adapters/application.js
import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  namespace: ENV.APP.API.NAMESPACE,
  host: ENV.APP.API.HOST
});