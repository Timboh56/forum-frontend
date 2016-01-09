import DS from 'ember-data';
import ENV from '../config/environment';

// app/adapters/application.js
//import active-model-adapterer from 'active-model-adapter';

export default DS.RESTAdapter.extend({
  namespace: ENV.APP.API.NAMESPACE,
  host: ENV.APP.API.HOST,
  headers: {
    'AUTHORIZATION': ENV.APIKEY
  }
});