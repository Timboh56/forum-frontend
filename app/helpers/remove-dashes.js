import Ember from 'ember';

export function removeDashes(params) {
  return params[0].replace('-', ' ').capitalize();
}

export default Ember.Helper.helper(removeDashes);
