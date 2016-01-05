import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  namespace: ENV.APP.API.NAMESPACE,
  host: ENV.APP.API.HOST
});