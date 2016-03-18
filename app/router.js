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
    this.route('bookmarks');
    this.route('questions', function() {
      this.route('new');
      this.route('index');
      this.route('newest');
      this.route('most-voted');
      this.route('most-viewed');
    });

    this.resource('user', { path: '/user/:id' }, function() {
      this.route('index');
      this.route('answers');
    });

    this.resource('question', { path: '/question/:id' }, function() {
      this.route('index');
      this.route('newest');
      this.route('most-active');
      this.route('most-voted');
    });
    this.route('inbox');
  });
  this.route('login');
});

export default Router;