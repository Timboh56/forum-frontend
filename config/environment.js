/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'forum',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    RESOURCES: {
      BOOKMARK_TABS: [
        {
          label: 'newest',
          id: 'newest',
          icon: 'edit',
          linkTo: 'forum.bookmarks.newest'
        },
        {
          label: 'most-active',
          id: 'active',
          icon: 'arrow-up',
          linkTo: 'forum.bookmarks.most-active'
        },
        {
          label: 'all',
          id: 'index',
          icon: 'edit',
          linkTo: 'forum.bookmarks.index'
        }
      ],
      QUESTION_TABS: [
        {
          label: 'newest',
          id: 'newest',
          icon: 'edit',
          linkTo: 'question.newest',
        },
        {
          label: 'voted',
          id: 'voted',
          icon: 'arrow-up',
          linkTo: 'question.most-voted',
        },
        {
          label: 'all',
          id: 'index',
          icon: 'edit',
          linkTo: 'question.index',
        },
      ],
      FORUM_TABS: [
        {
          label: 'newest',
          id: 'newest',
          icon: 'edit',
          linkTo: 'forum.questions.newest'
        },
        {
          label: 'most-active',
          id: 'active',
          icon: 'plus',
          linkTo: 'forum.questions.most-active'
        },
        {
          label: 'all',
          id: 'index',
          icon: 'edit',
          linkTo: 'forum.questions.index'
        }
      ]
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APIKEY: '004fb7c5fe59efaac02f8e69363b27df',
    CONSTANTS: {
      GOOGLE_API_URL: 'https://apis.google.com/js/platform.js'
    },
    APP: {
      TEST_USER_ATTR: { id: 1, username: "User", name_user: "User", status: 1 },
      GUEST_ATTR: { id: 0, username: "Guest", name_user: "Guest", status: 0 },
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    flashMessageDefaults: {
      timeout: 2000,
      extendedTimeout: 0,
      priority: 200,
      sticky: false,
      showProgress: true,
      injectionFactories: [ 'route', 'controller', 'view', 'component' ],
      preventDuplicates: false
    }
  };
  ENV.APP.TEST_USERNAME = "test_user";

  ENV['ember-cli-mirage'] = {
    enabled: false
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.CURRENT_USER_PATH = "http://localhost:3000/api/v1/me";
    ENV.APP.LOGIN_PATH = "http://localhost:3000/api/v1/login";
    ENV.APP.API = {
      NAMESPACE: 'api/v1',
      HOST: 'http://localhost:3000',
    }
    ENV.APP.NOTIFICATIONS_WEBSOCKETS_URI = "ws://localhost:9292/";
    ENV.APP.NOTIFICATIONS_SERVER_URI = "http://localhost:9292/api/v1/";
    ENV.environment = 'development';
    ENV.contentSecurityPolicy = {
      'style-src': "'self' https://fonts.googleapis.com/",
      'default-src': "'none'",
      'script-src': "'self' https://cdn.mxpnl.com, https://apis.google.com/js/platform.js", // Allow scripts from https://cdn.mxpnl.com
      'font-src': "'self' https://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
    }
  } else {

    ENV.APP.NOTIFICATIONS_WEBSOCKETS_URI = process.env.NOTIFICATIONS_WEBSOCKETS_URI;
    ENV.APP.NOTIFICATIONS_SERVER_URI = process.env.NOTIFICATIONS_SERVER_URI;
    ENV.APIKEY = process.env.PRODUCTION_API_KEY;
    ENV.environment = 'production';
    ENV.APP.CURRENT_USER_PATH = process.env.PRODUCTION_API_HOST + "/api/v1/me";
    ENV.APP.LOGIN_PATH = process.env.PRODUCTION_API_HOST + "/api/v1/login";
    ENV.APP.API = {
      NAMESPACE: 'api/v1',
      HOST: process.env.PRODUCTION_API_HOST,
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
