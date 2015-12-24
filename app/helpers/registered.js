import Ember from 'ember';

export function registered(user) {
  return user[0] && user[0].get('status') && user[0].get('status') > 0;
}

export default Ember.Helper.helper(registered);
