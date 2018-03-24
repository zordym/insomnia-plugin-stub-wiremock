module.exports.requestHooks = [
  require('./src/request-stub-generator')
];

module.exports.responseHooks = [
  require('./src/response-stub-generator')
];
