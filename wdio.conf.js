const { androidCapabilities } = require('./config/capabilities.android');

exports.config = {
  runner: 'local',
  port: 4723,
  path: '/wd/hub',
  specs: ['./test/specs/**/*.js'],
  exclude: [],
  maxInstances: 1,
  capabilities: [androidCapabilities],
  logLevel: 'info',
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
