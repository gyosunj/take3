module.exports = {
  verbose: true,
  collectCoverageFrom: ['<rootDir>/view/**/*.tsx'],
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: 'coverage-report',
  setupFilesAfterEnv: ['<rootDir>/test-setup.js'],
  testPathIgnorePatterns: ['/node_modules/'],
  moduleFileExtensions: ['tsx', 'js'],
  testMatch: ['**/__spec__/*.spec.(tsx|js)'],
};