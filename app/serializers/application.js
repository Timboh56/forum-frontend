import DS from 'ember-data';
import { ActiveModelSerializer } from 'active-model-adapter';
import ENV from '../config/environment';

var underscore = Ember.String.underscore;

export default DS.JSONAPISerializer.extend({

  headers: {
    'AUTHORIZATION': ENV.APIKEY
  },

  keyForAttribute: function(attr) {
    return underscore(attr);
  },

  keyForRelationship: function(rawKey) {
    return underscore(rawKey);
  },

 serialize() {

    const result = this._super(...arguments),
      attr = result.data.attributes || {},
      rel = result.data.relationships || {},
      klass = result.data.type.slice(0, -1),
      obj = {};

    obj[klass] = Object.keys(rel).reduce(function(acc, elem) {
      const data = rel[elem].data;
      if (data) {
        acc[elem + "_id"] = data.id;
      }
      if (data && data.type) {
        acc[elem + "_type"] = data.type[0].toUpperCase() + data.type.slice(1, -1);
      }
      return acc;

    }, attr);

    return obj;
  }
});
