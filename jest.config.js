'use strict';

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coverageReporters: ['cobertura', 'lcov'],
  coverageDirectory: './build/code-coverage',
  reporters: ['default'],
};
