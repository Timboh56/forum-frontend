import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  options: {
    email: '',
    password: ''
  },

  actions: {
    login() {
      let options = this.get('options'),
        Session = this.get('session'),
        params = this.get('options');

      Session.login(params);
    }
  }
});
