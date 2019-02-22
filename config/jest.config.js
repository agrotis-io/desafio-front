const path = require('path');

module.exports = {
  collectCoverageFrom: ['<rootDir>/src/**/*.js'],
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    "^@app(.*)$": "<rootDir>/src/$1",
  },
  setupFiles: ['<rootDir>/config/enzyme.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/node_modules/jest-enzyme/lib/index.js'],
  testMatch: ['<rootDir>/tests/**/*.test.js'],
  rootDir: path.resolve(__dirname, '../'),
};
