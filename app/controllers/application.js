import Ember from 'ember';
import SearchForumsMixin from '../mixins/search-forums';

export default Ember.Controller.extend(SearchForumsMixin, {
  session: Ember.inject.service('session'),
  currentUserService: Ember.inject.service('current-user'),
  currentUser: Ember.computed.alias('currentUserService.model'),
  actions: {
    invalidateSession(){
      this.get('session').invalidate();
    }
  }
});
