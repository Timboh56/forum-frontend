import Ember from 'ember';

export function guest(user) {
  return user.status < 1;
}


export default Ember.Helper.helper(guest);
