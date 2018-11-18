module.exports = {
  setupTestFrameworkScriptFile: './setupTests.js',
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  testMatch: [
    '<rootDir>/src/**/?(*.)(spec|test).js'
  ],
}
