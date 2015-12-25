import ENV from '../../config/environment';

export default function(server) {

  if (ENV.environment == 'development')
    server.loadFixtures();
};
