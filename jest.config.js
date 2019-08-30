'use strict'

module.exports = {
  setupFiles: ['<rootDir>/scripts/setup-enzyme.js'],
  moduleNameMapper: {
    '\\.(css)$': 'identity-obj-proxy',
  },
  collectCoverageFrom: ['src/**/*.js', '!src/**/__tests__/**/*.js'],
  coverageReporters: ['lcov', 'text'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
}
