import DS from 'ember-data';
import ENV from '../config/environment';
import ActiveModelAdapter from 'active-model-adapter';

export default DS.JSONAPIAdapter.extend({
  namespace: ENV.APP.API.NAMESPACE,
  host: ENV.APP.API.HOST,
  headers: {
    'AUTHORIZATION': ENV.APIKEY,
    'Content-Type': 'application/vnd.api+json'
  },

 // allows the multiword paths in urls to be underscored
  pathForType: function(type) {
    let underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  }

});