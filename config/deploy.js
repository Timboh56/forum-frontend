/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {}
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';

    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';

    ENV.s3 = {
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,html}',
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET,
      bucket: process.env.INDEX_BUCKET,
      region: 'us-west-1',
    };
    ENV.cloudfront = {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET,
      distribution: process.env.DISTRIBUTION_ID,
      region: 'us-west-1'
    };
    ENV['s3-index'] = {
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET,
      bucket: process.env.INDEX_BUCKET,
      region: 'us-west-1',
    };

    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
