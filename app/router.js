import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sessions', function() {
    this.route('main', { path: '/'});
    this.route('files');
    this.route('video');
    this.route('call');
    this.route('new');
  });

  this.route('forum', function() {
    this.route('answers');
    this.route('questions', function() {
      this.route('new');
      this.route('comments');
      this.resource('question');
    });
  });
});

export default Router;