import DS from 'ember-data';
import ENV from '../config/environment';
import ActiveModelAdapter from 'active-model-adapter';

export default DS.JSONAPIAdapter.extend({
  namespace: ENV.APP.API.NAMESPACE,
  host: ENV.APP.API.HOST,
  headers: {
    'Content-Type': 'application/json',
    'AUTHORIZATION': ENV.APIKEY
  },

 // allows the multiword paths in urls to be underscored
  pathForType: function(type) {
    let underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  },

  // allows queries to be sent along with a findRecord
  // hopefully Ember / EmberData will soon have this built in
  // ember-data issue tracked here:
  // https://github.com/emberjs/data/issues/3596
  urlForFindRecord(id, modelName, snapshot) {
    let url = this._super(arguments);
    let query = Ember.get(snapshot, 'adapterOptions.query');
    if(query) {
      url += '?' + Ember.$.param(query);
    }
    return url;
  }

});