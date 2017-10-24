module.exports = {
  setupFiles: [
    './testPolyfills.js'
  ],
  setupTestFrameworkScriptFile: './setupTests.js',
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  testMatch: [
    '<rootDir>/src/**/?(*.)(spec|test).js'
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
  testEnvironment: 'node',
  testURL: 'http://localhost',
}