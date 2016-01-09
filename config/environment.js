/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'mentormint',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    APIKEY: 'e14b6cbf8c3b80d0bd1a680d984ca997',
    CONSTANTS: {
      GOOGLE_API_URL: 'https://apis.google.com/js/platform.js'
    },
    APP: {
      TEST_USER_ATTR: { id: 1, username: "User", name_user: "User", status: 1 },
      GUEST_ATTR: { id: 0, username: "Guest", name_user: "Guest", status: 0 },
      NOTIFICATIONS_WEBSOCKETS_URI: "ws://mentormint-notifications.herokuapp.com/",
      NOTIFICATIONS_SERVER_URI: "https://mentormint-notifications.herokuapp.com/api/v1/"
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    flashMessageDefaults: {
      timeout: 9000,
      extendedTimeout: 0,
      priority: 200,
      sticky: true,
      showProgress: true,
      injectionFactories: [ 'route', 'controller', 'view', 'component' ],
      preventDuplicates: false
    }
  };

  ENV['ember-cli-mirage'] = {
    enabled: false
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.CURRENT_USER_PATH = "http://localhost:3000/api/v1/users/me";

    ENV.APP.API = {
      NAMESPACE: 'api/v1',
      HOST: 'http://localhost:3000',
    }

    ENV.environment = 'development';
    ENV.contentSecurityPolicy = {
      'style-src': "'self' https://fonts.googleapis.com/",
      'default-src': "'none'",
      'script-src': "'self' https://cdn.mxpnl.com, https://apis.google.com/js/platform.js", // Allow scripts from https://cdn.mxpnl.com
      'font-src': "'self' https://fonts.gstatic.com", // Allow fonts to be loaded from http://fonts.gstatic.com
    }
  } else {
    ENV.environment = 'production';
    ENV.APP.CURRENT_USER_PATH = "http://mentormint-api.herokuapp.com/api/v1/users/me";
    ENV.APP.API = {
      NAMESPACE: 'api/v1',
      HOST: 'http://mentormint-api.herokuapp.com',
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
